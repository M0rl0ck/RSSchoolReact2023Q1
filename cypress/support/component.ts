/// <reference types="cypress" />
import "../../component.d.ts";
import "./commands";
import { mount } from "cypress/react18";
import "@cypress/code-coverage/support";

Cypress.Commands.add("mount", mount);
