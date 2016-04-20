title: ICANN verification emails? Act now

+++


# ICANN verification emails? Act now

What is an ICANN verification email? Can I ignore it?  

TL;DR: No. Complete it. Now.  


![](http://media.syrinx.com/media/06320ed4-4f81-4d18-8d4f-45d509c0f959/img/3340/14120076.jpg)

ICANN (Internet Corporation for Assigned Names and Numbers) is responsible for IP address and domain provisioning. They work hand-in-hand with the registrars and resellers of the U.S. like Domain.com, GoDaddy and so on to issue and manage domains. If you buy example.com, part of that process is to give some contact information to them for billing and technical support. ICANN wants to make sure this information stays up-to-date, so they send out emails periodically (and upon certain events, like updates) in order to verify your information. "Domain verification," as this is called, is mandatory, and if you don't click on the link and respond within 14 days, your domain gets shut down. It appears that your DNS records have been deleted, but what has really happened is that your domain has been put on Domain Status: ClientHold status. No DNS requests get delegated down to your DNS provider. So everything for example.com fails DNS lookup in the browser. Tests from the command line return ** server can't find example.com: NXDOMAIN. This will happen until you verify your domain.  

In the case of one of our clients, the verification email went to an old email alias that was no longer in use, so no one ever saw it. When we noticed the issue, we helped the client re-create the email alias, had the registrar re-send the verification email and were able to complete it for them. WHOIS reflected the change in minutes with Domain Status: ok, and right after that their DNS started working again and browsers could get to the app again. While software development is our core business, this sort of DevOps work is part of the package when we deliver turnkey solutions to clients.
