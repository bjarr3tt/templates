/*
   stringReverse
      Used to reverse the order of characters in a text string
      this is primarily used for email addresses to scramble the characters
*/


function stringReverse(textString) {
   if (!textString) return '';
   var revString='';
   for (i = textString.length-1; i>=0; i--)
       revString+=textString.charAt(i)
   return revString;
}

/* 
    Enter the following function statement into the page itself. The proper syntax to use when calling the function on the page is:
    
    <script type="text/javascript"> showEM("liam","moc.liam");</script> 
    
    This will the display this email: mail@mail.com. Please change as you need to. 
    //////////////////////////////////////////////////////////////////////////////////
    
function showEM(userName,emServer) {
        
                userName = stringReverse(userName); 
                emServer = stringReverse(emServer); 
                
                var emLink = userName + "@" + emServer; 
                document.write("<a href='mailto:" + emLink +"'>");
                document.write(emLink);
                document.write("</a>");
            }
*/