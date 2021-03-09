using ContributionsService.BL;
using ContributionsService.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContributionsService.Controllers
{
    [Route("contributions")]
    [ApiController]
    public class ContributionsController : ControllerBase
    {

        IContributionsService _ContributionsService;
        private readonly ILogger<ContributionsController> _logger;

        public ContributionsController(ILogger<ContributionsController> logger, IContributionsService ContributionsService)
        {
            _logger = logger;
            _ContributionsService = ContributionsService;
        }
        [HttpPost]
        public async Task<object> Post([FromBody] Contribution contribution)
        {
            _logger.LogInformation("Enter");

            await _ContributionsService.InsertContribution(contribution);
            var response = new { StatusCode = 0, result = "contribution saved successfully" };

            _logger.LogInformation("Exit");

            return response;
        }
    }
}
