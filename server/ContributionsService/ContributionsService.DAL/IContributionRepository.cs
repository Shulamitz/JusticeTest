using ContributionsService.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ContributionsService.DAL
{

    public interface IContributionRepository
    {
        void AddContribution(Contribution contributions);
    }
}
