// MIT License
// 
// Copyright (c) 2017 Glenn Fitzpatrick
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


function autoArchive() {
  
  var expirations = {
    'Daily': '1d',
    'Weekly': '7d',
    'Monthly': '1m'
  }
  
  for (var key in expirations) {
    
    var emails = GmailApp.search('label:inbox '.concat('label:', key, ' older_than:', expirations[key], ' !label:starred'));
    
    for (var i = 0; i < emails.length; i++) {
      emails[i].markRead();
      emails[i].moveToArchive();
      emails[i].addLabel(GmailApp.getUserLabelByName("Expired"));
    }
  }
}
