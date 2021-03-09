using ContributionsService.DAL;
using ContributionsService.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ContributionsService.BL
{
    public class ContributionsService : IContributionsService
    {
        private readonly IContributionRepository _contributionRepository;
        private readonly IMailService _mailService;
        public ContributionsService(IContributionRepository contributionRepository, IMailService mailService)
        {
            _contributionRepository = contributionRepository;
            _mailService = mailService;
        }
        public async Task InsertContribution(Contribution contribution)
        {
            if (int.Parse(contribution.Sum) > 10000)
            {
                sendMailThanks();
            }
            _contributionRepository.AddContribution(contribution);
        }


        private void sendMailThanks()
        {
            MailRequest mailRequest = new MailRequest { ToEmail = "shulamit44091@gmail.com", Body = "Good luck", Subject = "justiceTest" };
            _mailService.SendEmailAsync(mailRequest);
        }
    }
}

