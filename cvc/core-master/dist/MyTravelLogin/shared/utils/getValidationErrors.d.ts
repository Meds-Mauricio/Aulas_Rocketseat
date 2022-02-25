import { ValidationError } from "yup";
interface Errors {
    [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors;
export {};
