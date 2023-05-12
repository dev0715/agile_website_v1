<template>
  <div id="contact" class="margin-bottom40">
    <div class="container">
      <div class="post-heading-center" style="margin-top: 30px">
        <h2>Try Firefly Risk Free for 14 Days</h2>
      </div>
      <div class="alert alert-success alert-dismissible show" role="alert" v-if="success">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div style="font-size: 20px">
          Thanks for your request for evaluating Firefly. Our support team will send you an evaluation license along with resources for getting started within 24 hours. If you have any questions, please don't hesitate to
          <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">contact us</a>
        </div>
      </div>
      <div class="row register-pannel" id="register-pannel-id">
        <div class="col-md-4 register-form-left-pannel text-center">
          <div>
            <div class="card-body center-block">
              <img src="../../assets/images/registration_form.svg" />
              <h2 class="py-3">Registration</h2>
            </div>
          </div>
        </div>

        <div class="col-md-8 py-5 border-firefly">
          <div class="container-fluid mx-3">
            <div class="sep-border margin-bottom40"></div>
            <!-- separator -->
            <!-- .row -->
            <div class="row">
              <div class="fix-padding"></div>
              <form method="post" class="divi-affa-form-contact" id="divi-register-form" enctype="multipart/form-data">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <label for="r_fname">First Name</label>
                        <input type="text" class="form-control required" name="r_fname" v-model="r_fname" placeholder="Enter First Name" />
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <label for="r_lname">Last Name</label>
                        <input type="text" class="form-control required" name="r_lname" v-model="r_lname" placeholder="Enter Last Name" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <label for="r_company">Company Name</label>
                        <input type="text" name="r_company" class="form-control required" v-model="r_company" placeholder="Enter Company" />
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <label>Job Title</label>
                        <input type="text" name="r_jobtitle" class="form-control required" v-model="r_jobtitle" placeholder="Enter Job Title" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <label for="r_email">Email</label>
                        <input type="text" name="r_email" class="form-control required" v-model="r_email" placeholder="Enter Email Address" />
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <label for="r_phonenumber">Phone Number</label>
                        <vue-tel-input v-model="vueTel.phone" v-bind="vueTel.props" v-on:input="onTelInput"></vue-tel-input>
                        <span style="display:none;" id="r_phonenumber_inputerror" class="r_phonenumber_inputerror">Phone number is invalid.</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <label for="r_country">Select Your Country</label>
                        <select id="country" name="r_country" class="form-control" v-model="r_country">
                          <option v-for="item in country_options" v-bind:value="item.value" :key="item.text">
                            {{ item.text }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 px-3">
                      <div class="form-group">
                        <VueRecaptcha class="g-recaptcha" ref="recaptcha" @verify="onVerify" @expired="onExpired" :sitekey="'6LeP_VUUAAAAAMMRcWjs5zlkCVvebQiOOMWdERZs'"> </VueRecaptcha>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="row px-3">
              <div class="container-fluid mb-30 mx-3">
                <input type="button" name="submit" value="Register" class="reg_btn" title="Firefly Trial Submit" @click="registerUser()" />
              </div>
            </div>
          </div>
          <!-- .row end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "RegisterForm",
  components: {
    VueRecaptcha
  },
  data() {
    return {
      vueTel: {
        phone: "",
        isValid:false,
        props: {
          name: 'r_phonenumber',
          autoFormat:true,
          // defaultCountry: "US",
          autoDefaultCountry: true,
          preferredCountries: ["US", "GB"],
          placeholder: "Enter your phone",
          mode: "international",
          inputOptions: {
            showDialCode: true,
            autocomplete:'off',
            placeholder: 'Enter phone number',
            required: true,
            styleClasses: 'tel-input-input',
            invalidMsg: 'Phone number is invalid.'
          },
          disabledFormatting: false,
          wrapperClasses: "country-phone-input",
          validCharactersOnly: true
        }
      },
      success_message: "",
      success: false,
      subject_error: "WARNING: freshsales api error:create lead manually",
      r_fname: "",
      r_lname: "",
      r_company: "",
      r_jobtitle: "",
      r_email: "",
      r_phonenumber: "",
      r_country: "United States of America",
      country_options: [
        { value: "United States of America", text: "United States of America" },
        { value: "Afghanistan", text: "Afghanistan" },
        { value: "Aland Islands", text: "Aland Islands" },
        { value: "Albania", text: "Albania" },
        { value: "Algeria", text: "Algeria" },
        { value: "American Samoa", text: "American Samoa" },
        { value: "Andorra", text: "Andorra" },
        { value: "Angola", text: "Angola" },
        { value: "Anguilla", text: "Anguilla" },
        { value: "Antarctica", text: "Antarctica" },
        { value: "Antigua And Barbuda", text: "Antigua And Barbuda" },
        { value: "Argentina", text: "Argentina" },
        { value: "Armenia", text: "Armenia" },
        { value: "Aruba", text: "Aruba" },
        { value: "Australia", text: "Australia" },
        { value: "Austria", text: "Austria" },
        { value: "Azerbaijan", text: "Azerbaijan" },
        { value: "Bahamas", text: "Bahamas" },
        { value: "Bahrain", text: "Bahrain" },
        { value: "Bangladesh", text: "Bangladesh" },
        { value: "Barbados", text: "Barbados" },
        { value: "Belarus", text: "Belarus" },
        { value: "Belgium", text: "Belgium" },
        { value: "Belize", text: "Belize" },
        { value: "Benin", text: "Benin" },
        { value: "Bermuda", text: "Bermuda" },
        { value: "Bhutan", text: "Bhutan" },
        { value: "Bolivia", text: "Bolivia" },
        {
          value: "Bolivia, Plurinational State of",
          text: "Bolivia, Plurinational State of"
        },
        {
          value: "Bonaire, Sint Eustatius and Saba",
          text: "Bonaire, Sint Eustatius and Saba"
        },
        { value: "Bosnia and Herzegovina", text: "Bosnia and Herzegovina" },
        { value: "Botswana", text: "Botswana" },
        { value: "Bouvet Island", text: "Bouvet Island" },
        { value: "Brazil", text: "Brazil" },
        {
          value: "British Indian Ocean Territory",
          text: "British Indian Ocean Territory"
        },
        { value: "Brunei Darussalam", text: "Brunei Darussalam" },
        { value: "Bulgaria", text: "Bulgaria" },
        { value: "Burkina Faso", text: "Burkina Faso" },
        { value: "Burundi", text: "Burundi" },
        { value: "Cambodia", text: "Cambodia" },
        { value: "Cameroon", text: "Cameroon" },
        { value: "Canada", text: "Canada" },
        { value: "Cape Verde", text: "Cape Verde" },
        { value: "Cayman Islands", text: "Cayman Islands" },
        { value: "Central African Republic", text: "Central African Republic" },
        { value: "Chad", text: "Chad" },
        { value: "Chile", text: "Chile" },
        { value: "China", text: "China" },
        { value: "Christmas Island", text: "Christmas Island" },
        { value: "Cocos (Keeling) Islands", text: "Cocos (Keeling) Islands" },
        { value: "Colombia", text: "Colombia" },
        { value: "Comoros", text: "Comoros" },
        { value: "Congo", text: "Congo" },
        {
          value: "Congo, the Democratic Republic of the",
          text: "Congo, the Democratic Republic of the"
        },
        { value: "Cook Islands", text: "Cook Islands" },
        { value: "Costa Rica", text: "Costa Rica" },
        { value: "Cote d'Ivoire", text: "Cote d'Ivoire" },
        { value: "Croatia", text: "Croatia" },
        { value: "Cuba", text: "Cuba" },
        { value: "Cyprus", text: "Cyprus" },
        { value: "Czech Republic", text: "Czech Republic" },
        { value: "Denmark", text: "Denmark" },
        { value: "Djibouti", text: "Djibouti" },
        { value: "Dominica", text: "Dominica" },
        { value: "Dominican Republic", text: "Dominican Republic" },
        { value: "Ecuador", text: "Ecuador" },
        { value: "Egypt", text: "Egypt" },
        { value: "El Salvador", text: "El Salvador" },
        { value: "Equatorial Guinea", text: "Equatorial Guinea" },
        { value: "Eritrea", text: "Eritrea" },
        { value: "Estonia", text: "Estonia" },
        { value: "Ethiopia", text: "Ethiopia" },
        {
          value: "Falkland Islands (Malvinas)",
          text: "Falkland Islands (Malvinas)"
        },
        { value: "Faroe Islands", text: "Faroe Islands" },
        { value: "Fiji", text: "Fiji" },
        { value: "Finland", text: "Finland" },
        { value: "France", text: "France" },
        { value: "French Guiana", text: "French Guiana" },
        { value: "French Polynesia", text: "French Polynesia" },
        {
          value: "French Southern Territories",
          text: "French Southern Territories"
        },
        { value: "Gabon", text: "Gabon" },
        { value: "Gambia", text: "Gambia" },
        { value: "Georgia", text: "Georgia" },
        { value: "Germany", text: "Germany" },
        { value: "Ghana", text: "Ghana" },
        { value: "Gibraltar", text: "Gibraltar" },
        { value: "Greece", text: "Greece" },
        { value: "Greenland", text: "Greenland" },
        { value: "Grenada", text: "Grenada" },
        { value: "Guadeloupe", text: "Guadeloupe" },
        { value: "Guam", text: "Guam" },
        { value: "Guatemala", text: "Guatemala" },
        { value: "Guernsey", text: "Guernsey" },
        { value: "Guinea", text: "Guinea" },
        { value: "Guinea-Bissau", text: "Guinea-Bissau" },
        { value: "Guyana", text: "Guyana" },
        { value: "Haiti", text: "Haiti" },
        {
          value: "Heard Island and McDonald Islands",
          text: "Heard Island and McDonald Islands"
        },
        {
          value: "Holy See (Vatican City State)",
          text: "Holy See (Vatican City State)"
        },
        { value: "Honduras", text: "Honduras" },
        { value: "Hong Kong", text: "Hong Kong" },
        { value: "Hungary", text: "Hungary" },
        { value: "Iceland", text: "Iceland" },
        { value: "India", text: "India" },
        { value: "Indonesia", text: "Indonesia" },
        {
          value: "Iran, Islamic Republic of",
          text: "Iran, Islamic Republic of"
        },
        { value: "Iraq", text: "Iraq" },
        { value: "Ireland", text: "Ireland" },
        { value: "Isle of Man", text: "Isle of Man" },
        { value: "Israel", text: "Israel" },
        { value: "Italy", text: "Italy" },
        { value: "Jamaica", text: "Jamaica" },
        { value: "Japan", text: "Japan" },
        { value: "Jersey", text: "Jersey" },
        { value: "Jordan", text: "Jordan" },
        { value: "Kazakhstan", text: "Kazakhstan" },
        { value: "Kenya", text: "Kenya" },
        { value: "Kiribati", text: "Kiribati" },
        {
          value: "Korea, Democratic People's Republic of",
          text: "Korea, Democratic People's Republic of"
        },
        { value: "Korea, Republic of", text: "Korea, Republic of" },
        { value: "Kosovo", text: "Kosovo" },
        { value: "Kuwait", text: "Kuwait" },
        { value: "Kyrgyzstan", text: "Kyrgyzstan" },
        {
          value: "Lao People's Democratic Republic",
          text: "Lao People's Democratic Republic"
        },
        { value: "Latvia", text: "Latvia" },
        { value: "Lebanon", text: "Lebanon" },
        { value: "Lesotho", text: "Lesotho" },
        { value: "Liberia", text: "Liberia" },
        { value: "Libya", text: "Libya" },
        { value: "Libyan Arab Jamahiriya", text: "Libyan Arab Jamahiriya" },
        { value: "Liechtenstein", text: "Liechtenstein" },
        { value: "Lithuania", text: "Lithuania" },
        { value: "Luxembourg", text: "Luxembourg" },
        { value: "Macao", text: "Macao" },
        {
          value: "Macedonia, The Former Yugoslav Republic Of",
          text: "Macedonia, The Former Yugoslav Republic Of"
        },
        { value: "Madagascar", text: "Madagascar" },
        { value: "Malawi", text: "Malawi" },
        { value: "Malaysia", text: "Malaysia" },
        { value: "Maldives", text: "Maldives" },
        { value: "Mali", text: "Mali" },
        { value: "Malta", text: "Malta" },
        { value: "Marshall Islands", text: "Marshall Islands" },
        { value: "Martinique", text: "Martinique" },
        { value: "Mauritania", text: "Mauritania" },
        { value: "Mauritius", text: "Mauritius" },
        { value: "Mayotte", text: "Mayotte" },
        { value: "Mexico", text: "Mexico" },
        {
          value: "Micronesia, Federated States of",
          text: "Micronesia, Federated States of"
        },
        { value: "Moldova, Republic of", text: "Moldova, Republic of" },
        { value: "Monaco", text: "Monaco" },
        { value: "Mongolia", text: "Mongolia" },
        { value: "Montenegro", text: "Montenegro" },
        { value: "Montserrat", text: "Montserrat" },
        { value: "Morocco", text: "Morocco" },
        { value: "Mozambique", text: "Mozambique" },
        { value: "Myanmar", text: "Myanmar" },
        { value: "Namibia", text: "Namibia" },
        { value: "Nauru", text: "Nauru" },
        { value: "Nepal", text: "Nepal" },
        { value: "Netherlands", text: "Netherlands" },
        { value: "Netherlands Antilles", text: "Netherlands Antilles" },
        { value: "New Caledonia", text: "New Caledonia" },
        { value: "New Zealand", text: "New Zealand" },
        { value: "Nicaragua", text: "Nicaragua" },
        { value: "Niger", text: "Niger" },
        { value: "Nigeria", text: "Nigeria" },
        { value: "Niue", text: "Niue" },
        { value: "Norfolk Island", text: "Norfolk Island" },
        { value: "Northern Mariana Islands", text: "Northern Mariana Islands" },
        { value: "Norway", text: "Norway" },
        { value: "Oman", text: "Oman" },
        { value: "Pakistan", text: "Pakistan" },
        { value: "Palau", text: "Palau" },
        {
          value: "Palestinian Territory, Occupied",
          text: "Palestinian Territory, Occupied"
        },
        { value: "Panama", text: "Panama" },
        { value: "Papua New Guinea", text: "Papua New Guinea" },
        { value: "Paraguay", text: "Paraguay" },
        { value: "Peru", text: "Peru" },
        { value: "Philippines", text: "Philippines" },
        { value: "Pitcairn", text: "Pitcairn" },
        { value: "Poland", text: "Poland" },
        { value: "Portugal", text: "Portugal" },
        { value: "Puerto Rico", text: "Puerto Rico" },
        { value: "Qatar", text: "Qatar" },
        { value: "Reunion", text: "Reunion" },
        { value: "Romania", text: "Romania" },
        { value: "Russian Federation", text: "Russian Federation" },
        { value: "Rwanda", text: "Rwanda" },
        { value: "Saint Barthelemy", text: "Saint Barthelemy" },
        {
          value: "Saint Helena, Ascension and Tristan da Cunha",
          text: "Saint Helena, Ascension and Tristan da Cunha"
        },
        { value: "Saint Kitts and Nevis", text: "Saint Kitts and Nevis" },
        { value: "Saint Lucia", text: "Saint Lucia" },
        { value: "Saint Martin", text: "Saint Martin" },
        {
          value: "Saint Pierre and Miquelon",
          text: "Saint Pierre and Miquelon"
        },
        {
          value: "Saint Vincent and the Grenadines",
          text: "Saint Vincent and the Grenadines"
        },
        { value: "Samoa", text: "Samoa" },
        { value: "San Marino", text: "San Marino" },
        { value: "Sao Tome and Principe", text: "Sao Tome and Principe" },
        { value: "Saudi Arabia", text: "Saudi Arabia" },
        { value: "Senegal", text: "Senegal" },
        { value: "Serbia", text: "Serbia" },
        { value: "Seychelles", text: "Seychelles" },
        { value: "Sierra Leone", text: "Sierra Leone" },
        { value: "Singapore", text: "Singapore" },
        { value: "Sint Maarten", text: "Sint Maarten" },
        { value: "Slovakia", text: "Slovakia" },
        { value: "Slovenia", text: "Slovenia" },
        { value: "Solomon Islands", text: "Solomon Islands" },
        { value: "Somalia", text: "Somalia" },
        { value: "South Africa", text: "South Africa" },
        {
          value: "South Georgia and the South Sandwich Islands",
          text: "South Georgia and the South Sandwich Islands"
        },
        { value: "South Sudan", text: "South Sudan" },
        { value: "Spain", text: "Spain" },
        { value: "Sri Lanka", text: "Sri Lanka" },
        { value: "Sudan", text: "Sudan" },
        { value: "Suriname", text: "Suriname" },
        { value: "Svalbard and Jan Mayen", text: "Svalbard and Jan Mayen" },
        { value: "Swaziland", text: "Swaziland" },
        { value: "Sweden", text: "Sweden" },
        { value: "Switzerland", text: "Switzerland" },
        { value: "Syrian Arab Republic", text: "Syrian Arab Republic" },
        {
          value: "Taiwan, Province of China",
          text: "Taiwan, Province of China"
        },
        { value: "Tajikistan", text: "Tajikistan" },
        {
          value: "Tanzania, United Republic of",
          text: "Tanzania, United Republic of"
        },
        { value: "Thailand", text: "Thailand" },
        { value: "Timor-Leste", text: "Timor-Leste" },
        { value: "Togo", text: "Togo" },
        { value: "Tokelau", text: "Tokelau" },
        { value: "Tonga", text: "Tonga" },
        { value: "Trinidad and Tobago", text: "Trinidad and Tobago" },
        { value: "Tunisia", text: "Tunisia" },
        { value: "Turkey", text: "Turkey" },
        { value: "Turkmenistan", text: "Turkmenistan" },
        { value: "Turks and Caicos Islands", text: "Turks and Caicos Islands" },
        { value: "Tuvalu", text: "Tuvalu" },
        { value: "Uganda", text: "Uganda" },
        { value: "Ukraine", text: "Ukraine" },
        { value: "United Arab Emirates", text: "United Arab Emirates" },
        { value: "United Kingdom", text: "United Kingdom" },
        {
          value: "United States Minor Outlying Islands",
          text: "United States Minor Outlying Islands"
        },
        { value: "Uruguay", text: "Uruguay" },
        { value: "Uzbekistan", text: "Uzbekistan" },
        { value: "Vanuatu", text: "Vanuatu" },
        {
          value: "Venezuela, Bolivarian Republic of",
          text: "Venezuela, Bolivarian Republic of"
        },
        { value: "Viet Nam", text: "Viet Nam" },
        { value: "Virgin Islands, British", text: "Virgin Islands, British" },
        { value: "Virgin Islands, U.S.", text: "Virgin Islands, U.S." },
        { value: "Wallis and Futuna", text: "Wallis and Futuna" },
        { value: "Western Sahara", text: "Western Sahara" },
        { value: "Yemen", text: "Yemen" },
        { value: "Zambia", text: "Zambia" },
        { value: "Zimbabwe", text: "Zimbabwe" }
      ],
      r_timezone: "American Samoa",
      timezone_options: [
        { value: "American Samoa", text: "(GMT-11:00) American Samoa" },
        {
          value: "International Date Line West",
          text: "(GMT-11:00) International Date Line West"
        },
        { value: "Midway Island", text: "(GMT-11:00) Midway Island" },
        { value: "Hawaii", text: "(GMT-10:00) Hawaii" },
        { value: "Alaska", text: "(GMT-09:00) Alaska" },
        {
          value: "Pacific Time (US &amp; Canada)",
          text: "(GMT-08:00) Pacific Time (US &amp; Canada)"
        },
        { value: "Tijuana", text: "(GMT-08:00) Tijuana" },
        { value: "Arizona", text: "(GMT-07:00) Arizona" },
        { value: "Chihuahua", text: "(GMT-07:00) Chihuahua" },
        { value: "Mazatlan", text: "(GMT-07:00) Mazatlan" },
        {
          value: "Mountain Time (US &amp; Canada)",
          text: "(GMT-07:00) Mountain Time (US &amp; Canada)"
        },
        { value: "Central America", text: "(GMT-06:00) Central America" },
        {
          value: "Central Time (US &amp; Canada)",
          text: "(GMT-06:00) Central Time (US &amp; Canada)"
        },
        { value: "Guadalajara", text: "(GMT-06:00) Guadalajara" },
        { value: "Mexico City", text: "(GMT-06:00) Mexico City" },
        { value: "Monterrey", text: "(GMT-06:00) Monterrey" },
        { value: "Saskatchewan", text: "(GMT-06:00) Saskatchewan" },
        { value: "Bogota", text: "(GMT-05:00) Bogota" },
        {
          value: "Eastern Time (US &amp; Canada)",
          text: "(GMT-05:00) Eastern Time (US &amp; Canada)"
        },
        { value: "Indiana (East)", text: "(GMT-05:00) Indiana (East)" },
        { value: "Lima", text: "(GMT-05:00) Lima" },
        { value: "Quito", text: "(GMT-05:00) Quito" },
        { value: "Caracas", text: "(GMT-04:30) Caracas" },
        {
          value: "Atlantic Time (Canada)",
          text: "(GMT-04:00) Atlantic Time (Canada)"
        },
        { value: "Georgetown", text: "(GMT-04:00) Georgetown" },
        { value: "La Paz", text: "(GMT-04:00) La Paz" },
        { value: "Santiago", text: "(GMT-04:00) Santiago" },
        { value: "Newfoundland", text: "(GMT-03:30) Newfoundland" },
        { value: "Brasilia", text: "(GMT-03:00) Brasilia" },
        { value: "Buenos Aires", text: "(GMT-03:00) Buenos Aires" },
        { value: "Greenland", text: "(GMT-03:00) Greenland" },
        { value: "Mid-Atlantic", text: "(GMT-02:00) Mid-Atlantic" },
        { value: "Azores", text: "(GMT-01:00) Azores" },
        { value: "Cape Verde Is.", text: "(GMT-01:00) Cape Verde Is." },
        { value: "Casablanca", text: "(GMT+00:00) Casablanca" },
        { value: "Dublin", text: "(GMT+00:00) Dublin" },
        { value: "Edinburgh", text: "(GMT+00:00) Edinburgh" },
        { value: "Lisbon", text: "(GMT+00:00) Lisbon" },
        { value: "London", text: "(GMT+00:00) London" },
        { value: "Monrovia", text: "(GMT+00:00) Monrovia" },
        { value: "UTC", text: "(GMT+00:00) UTC" },
        { value: "Amsterdam", text: "(GMT+01:00) Amsterdam" },
        { value: "Belgrade", text: "(GMT+01:00) Belgrade" },
        { value: "Berlin", text: "(GMT+01:00) Berlin" },
        { value: "Bern", text: "(GMT+01:00) Bern" },
        { value: "Bratislava", text: "(GMT+01:00) Bratislava" },
        { value: "Brussels", text: "(GMT+01:00) Brussels" },
        { value: "Budapest", text: "(GMT+01:00) Budapest" },
        { value: "Copenhagen", text: "(GMT+01:00) Copenhagen" },
        { value: "Ljubljana", text: "(GMT+01:00) Ljubljana" },
        { value: "Madrid", text: "(GMT+01:00) Madrid" },
        { value: "Paris", text: "(GMT+01:00) Paris" },
        { value: "Prague", text: "(GMT+01:00) Prague" },
        { value: "Rome", text: "(GMT+01:00) Rome" },
        { value: "Sarajevo", text: "(GMT+01:00) Sarajevo" },
        { value: "Skopje", text: "(GMT+01:00) Skopje" },
        { value: "Stockholm", text: "(GMT+01:00) Stockholm" },
        { value: "Vienna", text: "(GMT+01:00) Vienna" },
        { value: "Warsaw", text: "(GMT+01:00) Warsaw" },
        {
          value: "West Central Africa",
          text: "(GMT+01:00) West Central Africa"
        },
        { value: "Zagreb", text: "(GMT+01:00) Zagreb" },
        { value: "Athens", text: "(GMT+02:00) Athens" },
        { value: "Bucharest", text: "(GMT+02:00) Bucharest" },
        { value: "Cairo", text: "(GMT+02:00) Cairo" },
        { value: "Harare", text: "(GMT+02:00) Harare" },
        { value: "Helsinki", text: "(GMT+02:00) Helsinki" },
        { value: "Istanbul", text: "(GMT+02:00) Istanbul" },
        { value: "Jerusalem", text: "(GMT+02:00) Jerusalem" },
        { value: "Kyiv", text: "(GMT+02:00) Kyiv" },
        { value: "Pretoria", text: "(GMT+02:00) Pretoria" },
        { value: "Riga", text: "(GMT+02:00) Riga" },
        { value: "Sofia", text: "(GMT+02:00) Sofia" },
        { value: "Tallinn", text: "(GMT+02:00) Tallinn" },
        { value: "Vilnius", text: "(GMT+02:00) Vilnius" },
        { value: "Baghdad", text: "(GMT+03:00) Baghdad" },
        { value: "Kuwait", text: "(GMT+03:00) Kuwait" },
        { value: "Minsk", text: "(GMT+03:00) Minsk" },
        { value: "Moscow", text: "(GMT+03:00) Moscow" },
        { value: "Nairobi", text: "(GMT+03:00) Nairobi" },
        { value: "Riyadh", text: "(GMT+03:00) Riyadh" },
        { value: "St. Petersburg", text: "(GMT+03:00) St. Petersburg" },
        { value: "Volgograd", text: "(GMT+03:00) Volgograd" },
        { value: "Tehran", text: "(GMT+03:30) Tehran" },
        { value: "Abu Dhabi", text: "(GMT+04:00) Abu Dhabi" },
        { value: "Baku", text: "(GMT+04:00) Baku" },
        { value: "Muscat", text: "(GMT+04:00) Muscat" },
        { value: "Tbilisi", text: "(GMT+04:00) Tbilisi" },
        { value: "Yerevan", text: "(GMT+04:00) Yerevan" },
        { value: "Kabul", text: "(GMT+04:30) Kabul" },
        { value: "Ekaterinburg", text: "(GMT+05:00) Ekaterinburg" },
        { value: "Islamabad", text: "(GMT+05:00) Islamabad" },
        { value: "Karachi", text: "(GMT+05:00) Karachi" },
        { value: "Tashkent", text: "(GMT+05:00) Tashkent" },
        { value: "Chennai", text: "(GMT+05:30) Chennai" },
        { value: "Kolkata", text: "(GMT+05:30) Kolkata" },
        { value: "Mumbai", text: "(GMT+05:30) Mumbai" },
        { value: "New Delhi", text: "(GMT+05:30) New Delhi" },
        {
          value: "Sri Jayawardenepura",
          text: "(GMT+05:30) Sri Jayawardenepura"
        },
        { value: "Kathmandu", text: "(GMT+05:45) Kathmandu" },
        { value: "Almaty", text: "(GMT+06:00) Almaty" },
        { value: "Astana", text: "(GMT+06:00) Astana" },
        { value: "Dhaka", text: "(GMT+06:00) Dhaka" },
        { value: "Novosibirsk", text: "(GMT+06:00) Novosibirsk" },
        { value: "Urumqi", text: "(GMT+06:00) Urumqi" },
        { value: "Rangoon", text: "(GMT+06:30) Rangoon" },
        { value: "Bangkok", text: "(GMT+07:00) Bangkok" },
        { value: "Hanoi", text: "(GMT+07:00) Hanoi" },
        { value: "Jakarta", text: "(GMT+07:00) Jakarta" },
        { value: "Krasnoyarsk", text: "(GMT+07:00) Krasnoyarsk" },
        { value: "Beijing", text: "(GMT+08:00) Beijing" },
        { value: "Chongqing", text: "(GMT+08:00) Chongqing" },
        { value: "Hong Kong", text: "(GMT+08:00) Hong Kong" },
        { value: "Irkutsk", text: "(GMT+08:00) Irkutsk" },
        { value: "Kuala Lumpur", text: "(GMT+08:00) Kuala Lumpur" },
        { value: "Perth", text: "(GMT+08:00) Perth" },
        { value: "Singapore", text: "(GMT+08:00) Singapore" },
        { value: "Taipei", text: "(GMT+08:00) Taipei" },
        { value: "Ulaan Bataar", text: "(GMT+08:00) Ulaan Bataar" },
        { value: "Osaka", text: "(GMT+09:00) Osaka" },
        { value: "Sapporo", text: "(GMT+09:00) Sapporo" },
        { value: "Seoul", text: "(GMT+09:00) Seoul" },
        { value: "Tokyo", text: "(GMT+09:00) Tokyo" },
        { value: "Yakutsk", text: "(GMT+09:00) Yakutsk" },
        { value: "Adelaide", text: "(GMT+09:30) Adelaide" },
        { value: "Darwin", text: "(GMT+09:30) Darwin" },
        { value: "Brisbane", text: "(GMT+10:00) Brisbane" },
        { value: "Canberra", text: "(GMT+10:00) Canberra" },
        { value: "Guam", text: "(GMT+10:00) Guam" },
        { value: "Hobart", text: "(GMT+10:00) Hobart" },
        { value: "Magadan", text: "(GMT+10:00) Magadan" },
        { value: "Melbourne", text: "(GMT+10:00) Melbourne" },
        { value: "Port Moresby", text: "(GMT+10:00) Port Moresby" },
        { value: "Solomon Is.", text: "(GMT+10:00) Solomon Is." },
        { value: "Sydney", text: "(GMT+10:00) Sydney" },
        { value: "Vladivostok", text: "(GMT+10:00) Vladivostok" },
        { value: "New Caledonia", text: "(GMT+11:00) New Caledonia" },
        { value: "Auckland", text: "(GMT+12:00) Auckland" },
        { value: "Fiji", text: "(GMT+12:00) Fiji" },
        { value: "Kamchatka", text: "(GMT+12:00) Kamchatka" },
        { value: "Marshall Is.", text: "(GMT+12:00) Marshall Is." },
        { value: "Wellington", text: "(GMT+12:00) Wellington" },
        { value: "Nuku'alofa", text: "(GMT+13:00) Nuku'alofa" },
        { value: "Samoa", text: "(GMT+13:00) Samoa" },
        { value: "Tokelau Is.", text: "(GMT+13:00) Tokelau Is." }
      ],
      captch_flag: false
    };
  },
  created() {
    // this.r_fname = 'Peter';
    // this.r_lname = 'Berger';
    // this.r_company = 'Upwork';
    // this.r_jobtitle = 'Website Building';
    // this.r_email = 'peter.ber518@mail.com';
    // this.r_phonenumber = '12345678';
  },
  methods: {
    onTelInput: function (phone,phoneObject) {
      if (phoneObject.isValid) {
        this.r_phonenumber = phoneObject.number.e164;

        $("#r_phonenumber_inputerror").toggle( false );
      } else {
        this.r_phonenumber = "";
        $("#r_phonenumber_inputerror").toggle( true );
      }
      this.vueTel.isValid = phoneObject.isValid;
    },
    onSubmit: function() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function(response) {
      this.captch_flag = true;
    },
    onExpired: function() {
      this.captch_flag = false;
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
    capitalize: function(str) {
      str = str.charAt(0).toUpperCase() + str.slice(1);
      return str;
    },
    registerUser() {
      jQuery.validator.addMethod(
        "checkDomain",
        function(e) {
          return /^([\w-.]+@(?!gmail)(?!outlook)(?!hotmail)(?!yahoo)(?!yandex)([\w-]+.)+[\w-]{2,4})?$/.test(e);
        },
        "please use your corporate email address.email with domain (gmail,outlook,hotmail,yahoo,yandex)are not allowed."
      );
      $("#divi-register-form")
        .validate({
          rules: {
            r_lname: {
              required: !0,
              maxlength: 30,
              minlength: 2
            },
            r_email: {
              required: !0,
              checkDomain: !0,
              email: !0
            },
            r_company: {
              required: !0,
              maxlength: 50,
              minlength: 1
            },
            r_jobtitle: {
              required: !0,
              maxlength: 50,
              minlength: 2
            },
            r_fname: {
              required: !0,
              maxlength: 30,
              minlength: 2
            },
            r_phonenumber: {
              // maxlength: 16,
              // minlength: 8,
              // number: !0
            },
            r_timezone: {
              required: !0
            }
          }
        })
        .form();
      if (!this.vueTel.isValid) {
        console.log($("#r_phonenumber_inputerror"));
        $("#r_phonenumber_inputerror").toggle( true );
      }
      if ($("#divi-register-form").valid() && this.captch_flag && this.vueTel.isValid) {
        let payload = {};
        payload.category = "firefly";
        payload.r_fname = this.capitalize(this.r_fname);
        payload.r_lname = this.capitalize(this.r_lname);
        payload.r_email = this.r_email;
        payload.r_jobtitle = this.capitalize(this.r_jobtitle);
        payload.r_company = this.capitalize(this.r_company);
        payload.r_phonenumber = this.r_phonenumber;
        payload.r_country = this.r_country;
        payload.r_timezone = this.r_timezone;
        payload.r_product = 'Firefly';
        // this.$store.dispatch('setLoadingFlag', 'flex');
        // this.$store.dispatch('setLoadingText', 'Updating...');
        this.$store
          .dispatch("createItem", payload)
          .then(response => {
            this.success = true;
            this.r_fname = "";
            this.r_lname = "";
            this.r_email = "";
            this.r_jobtitle = "";
            this.r_company = "";
            this.r_phonenumber = "";
            this.$store.dispatch("setResponseFlag", true);
            $("#register-pannel-id").toggle("off");
          })
          .catch(error => {
            console.log("Error");
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.country-phone-input{
  margin-bottom: 15px;
  max-height: 52px;
}
.country-phone-input input {
    max-height: 50px;
}
.country-phone-input .dropdown:focus {
  outline: none;
  color: grey;
}
.r_phonenumber_inputerror{
  color: #d86c6c;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
.g-recaptcha{
  transform: scale(0.92);
  transform-origin: 0px 0px;
  margin-top:15px;
}
@media screen and (max-width: 1200px){
  .g-recaptcha{
    transform: scale(1);
  }
}
</style>
