<%
    ' Check if the form was submitted
    If Request.ServerVariables("REQUEST_METHOD") = "POST" Then
        ' Get the form data
        Dim name, comment
        name = Request.Form("Name")
        comment = Request.Form("comment")

        ' Basic validation: Check if the name or comment is empty
        If Len(name) = 0 Or Len(comment) = 0 Then
            Response.Write("<h3>Please provide both your name and a comment.</h3>")
        Else
            ' Display the comment
            Response.Write("<h3>Thank you for your comment, " & name & "!</h3>")
            Response.Write("<p>Your comment:</p>")
            Response.Write("<blockquote>" & comment & "</blockquote>")

            ' Optional: Save the comment to a file (comments.txt)
            Dim filePath, file
            filePath = Server.MapPath("comments.txt")
            Set file = Server.CreateObject("Scripting.FileSystemObject").OpenTextFile(filePath, 8, True)
            file.WriteLine("Name: " & name & " - Comment: " & comment)
            file.Close

            ' Optionally, redirect to another page or show a success message
            ' Response.Redirect("thank_you.asp")
        End If
    End If
%>
