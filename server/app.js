const express = require("express"),
  app = express(),
  http = require("http").Server(app),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  formidable = require("formidable"),
  request = require("request"),
  path = require("path");

const slackService = require('./slack');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist")));
app.use("/", express.static(__dirname + "/"));

let mailInfo = {};
function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}
// Non API request -> send the homepage.
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.options("/createItem", function(req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS, HEAD");
  res.send();
});

app.post("/createItem", function(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    let lead = {
      email: fields.r_email,
      first_name: fields.r_fname,
      last_name: fields.r_lname,
      job_title: fields.r_jobtitle,
      work_number: fields.r_phonenumber,
      country: fields.r_country,
      time_zone: fields.r_timezone,
      company: {
        name: fields.r_company
      },
      custom_field: {
        cf_lead_source: "Website",
        cf_products: fields.r_product,
      }
    };
    request_type = "create-item";
    createNewLead(fields, lead);
  });
  res.send({ error: false });
});

function createNewLead(fields, lead) {
  let json = {
    lead: lead
  };
  let options = {
    url: "http://agiletestware.freshsales.io/api/leads",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=YnCKDaGhjVKMeZ_5V0XH2w`
    },
    json: json
  };
  request(options, function(err, res, body) {
    if (res && (res.statusCode === 200 || res.statusCode === 201)) {
      console.log(`http://agiletestware.freshsales.io/leads/${res.body.lead.id}`);
      console.log(`${capitalize(fields.r_product)} Signup: <http://agiletestware.freshsales.io/leads/${res.body.lead.id}|${res.body.lead.company.name} - ${res.body.lead.display_name}>`);
      slackService.sendSlackMessage(`${capitalize(fields.r_product)} Signup: <http://agiletestware.freshsales.io/leads/${res.body.lead.id}|${res.body.lead.company.name} - ${res.body.lead.display_name}> :slightly_smiling_face:`);
    } else {
      let err_message =
        "<tr><td colspan='2'>Lead Submit</td></tr> \
      <tr><td align='left' valign='top'>Lead Submit Freshsales encountered an error. CODE HTTP STATUS: </td><td valign='top'>Status</td></tr> \
      <tr><td align='left' valign='top'>Lead Submit Freshsales encountered an error. CODE Response: </td><td valign='top'>Response</td></tr>";

      let user_content_error =
        " \
                    <table width='682' border='1' cellspacing='0' cellpadding='0'> \
											<tr><td colspan='2'><strong style='color:red;'>Error Messages</strong> </td></tr> \
											<tr><td width='50%'>" + err_message + "</td></tr> \
										</table>";
      user_message_error += mailInfo.user_content + user_content_error;
      user_message_error += "\n\n";
    }
  });
}

http.listen(process.env.PORT || 8080, function() {
  console.log(`Connected & Listen to port: ${process.env.PORT || 8080}`);
});
