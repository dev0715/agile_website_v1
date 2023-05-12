'use strict';

const { getApiClient } = require('./request');
const SLACK_API_BASE_URL = "https://hooks.slack.com/services/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";

// todo; deprecate this function.
async function sendMessage(data) {
    try {
        const apiClient = await getApiClient(SLACK_API_BASE_URL);
        await apiClient.request({
          method: 'POST',
          data: {
            // text: `New Signup: [${data.company}] https://railflow.myfreshworks.com/crm/sales/contacts/${data.contactId}`,
            text: `New Signup: <https://railflow.myfreshworks.com/crm/sales/contacts/${data.contactId}|${data.company}> :partying_face:`,
          },
        });

        return Promise.resolve();
      } catch (error) {
        console.log(error);
        throw new ApiError(`> Error while sending slack message`);
      }
}

async function sendSlackMessage(message) {
    try {
        const apiClient = await getApiClient(SLACK_API_BASE_URL);
        await apiClient.request({
          method: 'POST',
          data: {
            text: message,
          },
        });

        return Promise.resolve();
      } catch (error) {
        console.log(error);
        throw new ApiError(`> Error while sending slack message`);
      }
}

module.exports = {
    sendMessage,
    sendSlackMessage
};