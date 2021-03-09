using ContributionsService.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ContributionsService.BL
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
