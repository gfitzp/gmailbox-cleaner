# gmailbox-cleaner
Use Google Apps Script to programmatically archive emails on a schedule based on tags.

Create labels in Gmail for **"Daily"**, **"Weekly"**, **"Monthly"**, and **"Expired"**. These labels correspond to different time-based search operators:
  - "Daily" = `1d`
  - "Weekly" = `7d`
  - "Monthly" = `1m`

Create a project at [https://script.google.com/](https://script.google.com) using the contents of `code.gs`.

Under Edit > Current project's triggers, set the script to run on a recurring basis.  
(e.g. "Time-driven", "Minutes timer", and "Every 15 minutes")

Configure filters in Gmail to assign a Daily, Weekly, or Monthly label to an incoming email.

Kick back while your inbox is automatically cleaned of old emails! After a "Daily" email has been in your inbox for more than a day, a "Weekly" email for more than a week, or a "Monthly" email for more than 1 month, the email will be marked as read, archived, and assigned an "Expired" tag to easily identify later.

**Tip:** Star an email thread to keep it from being automatically archived.
