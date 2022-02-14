import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

/** A hero's name can't match the hero's alter ego */
export const passwordValidatorFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get("password")
  const fullName = control.get("fullName")
  console.log()
  return fullName && password && password.value.includes(fullName.value) ? { includename: true } : null
}
export const passwordValidatorMatchFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get("password")

  const validatePasswoed = control.get("validatePasswoed")
  console.log()
  return password && validatePasswoed && password.value != validatePasswoed.value ? { dontmatch: true } : null
}
