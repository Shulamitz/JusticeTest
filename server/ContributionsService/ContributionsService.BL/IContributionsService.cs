using ContributionsService.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ContributionsService.BL
{
    public interface IContributionsService
    {
        Task InsertContribution(Contribution contribution);
    }
}
