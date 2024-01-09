import { message } from "antd";

const headers = {
  "Content-Type": "application/json",
  accept: "application/json",
  "Access-Control-Allow-Headers": "Content-Type",
  "access-control-allow-credentials": true,
  "Access-Control-Allow-Methods": "POST, GET, DELETE",
  "Access-Control-Request-Method": "POST, GET, DELETE",
  "Access-Control-Request-Headers": "POST, GET, DELETE",
};

export function apiCall(
  requestMethod,
  url,
  body,
  onSuccess,
  onFailure,
  accessToken = null
) {
  if (accessToken !== null) {
    headers["Authorization"] = "Bearer " + accessToken;
  }
  let formData = {
    method: requestMethod,
    headers: headers,
  };
  let formBody = JSON.stringify(body);

  if (body !== undefined && body !== "") {
    formData["body"] = formBody;
  }

  fetch(url, formData, 500)
    .then((response) => {
      response
        .json()
        .then((responseJson) => {
          if (responseJson) {
            onSuccess(responseJson);
          } else {
            onFailure(responseJson);
          }
        })
        .catch((error) => {
          message.error(error);
          onFailure(error);
        });
    })
    .catch((error) => {
      message.error(error);
      onFailure(error);
    });
}
