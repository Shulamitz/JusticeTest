using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.RegularExpressions;

namespace ContributionsService.Model.DataAnnotations
{
    public class EnglishHebrew : ValidationAttribute
    {
        public const string ENGLISH_HEBREW_REGEX = "^[aA-zZא-ת]*$";

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null && !Regex.IsMatch(value.ToString(), ENGLISH_HEBREW_REGEX))
            {
                return new ValidationResult($"value doesn't match the regex {ENGLISH_HEBREW_REGEX}");
            }

            return ValidationResult.Success;
        }
    }
}
