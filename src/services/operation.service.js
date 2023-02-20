import { authHeader } from '../helpers';

export const operationService = {
    addition,
    subtract,
    multiplication,
    division,
    square_root,
    random_string
};

function addition(operand_a, operand_b) {
    const operation = 1;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify({ operand_a, operand_b, operation })
    };

    return fetch('http://localhost:8000/calculator/operation/', requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.result) {
                return response.result;
            }
        });
}

function subtract(operand_a, operand_b) {
    const operation = 2;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify({ operand_a, operand_b, operation })
    };

    return fetch('http://localhost:8000/calculator/operation/', requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.result) {
                return response.result;
            }
        });
}

function multiplication(operand_a, operand_b) {
    const operation = 3;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify({ operand_a, operand_b, operation })
    };

    return fetch('http://localhost:8000/calculator/operation/', requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.result) {
                return response.result;
            }
        });
}

function division(operand_a, operand_b) {
    const operation = 4;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify({ operand_a, operand_b, operation })
    };

    return fetch('http://localhost:8000/calculator/operation/', requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.result) {
                return response.result;
            }
        });
}

function square_root(operand_a) {
    const operation = 5;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify({ operand_a, operation })
    };

    return fetch('http://localhost:8000/calculator/operation/', requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.result) {
                return response.result;
            }
        });
}

function random_string() {
    const operation = 6;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify({ operation })
    };

    return fetch('http://localhost:8000/calculator/operation/', requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.result) {
                return response.result;
            }
        });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.error) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}