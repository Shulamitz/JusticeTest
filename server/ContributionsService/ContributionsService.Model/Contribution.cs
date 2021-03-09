using ContributionsService.Model.DataAnnotations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ContributionsService.Model
{
    public class Contribution
    {
        [Required]
        [EnglishHebrew]
        public string EntityName { get; set; }
        [Required]
        [RegularExpression(@"^\d*\.?\d*$")]
        public string Sum { get; set; }
        [Required]
        public string EntityType { get; set; }
        [Required]
        public string Destiny { get; set; }
        public string Condition { get; set; }
        [Required]
        public string CurrencyType { get; set; }
        [Required]
        public string ConversionRate { get; set; }
        public string Owner { get; set; }

    }
}
