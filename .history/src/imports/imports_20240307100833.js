// React và các hooks
import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// Thư viện React Bootstrap
import { Container, Form, Button } from "react-bootstrap";

// Thư viện Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

// Các hàm và context chung
import { isValidation } from "~/functions/validation";
import { interactData } from "~/functions/interactData";
import { handleResponse } from "~/functions/eventHandlers";
import { AuthContext } from "~/functions/Contexts/authContext";

// Classnames cho CSS module
import classNames from "classnames/bind";
const importStyles = (moduleName) => {
  return classNames.bind(require(`./${moduleName}.module.scss`));
};

const cx = classNames.bind(styles);

// Export các import để có thể sử dụng trong các file khác
export {
  useState,
  useEffect,
  useContext,
  useRef,
  Link,
  useNavigate,
  Container,
  Form,
  Button,
  FontAwesomeIcon,
  faEye,
  faEyeSlash,
  isValidation,
  interactData,
  handleResponse,
  AuthContext,
  classNames,
  importStyles,
  cx,
};
