let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue ='';
for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value += screenValue;
            
        }
        else if(buttonText =='C'){
            screen.value = screenValue;
            screenValue = "";

        }
        else if(buttonText =='='){
            screen.value = eval(screenValue);

        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
            
        }
    })
}
/*Dim a As Long
Dim s As String
Private Sub Command1_Click() 
Text1.Text = Text1 + "1"
End Sub
Private Sub Command10_Click() 
Text1.Text = Text1 + "0"
End Sub
Private Sub Command13_Click() 
a = CInt(Text1.Text)
s = "/"
Text1.Text = " "
End Sub
Private Sub Command14_Click() 
a = CInt(Text1.Text)
s = "*"
Text1.Text = " "
End Sub
Private Sub Command15_Click() 
a = CInt(Text1.Text)
s = "-"
Text1.Text = " "
End Sub
Private Sub Command16_Click() 
a = CInt(Text1.Text)
s = "+"
Text1.Text = " "
End Sub
 
Private Sub Command17_Click() 
Dim z As Long
a = Text1.Text
z = Text1.Text \ 10
Text1.Text = z
End Sub
Private Sub Command18_Click() 
Text1.Text = " "
End Sub
Private Sub Command19_Click() 
If s = "/" 
Text1.Text = CInt(a) / CInt(Text1.Text)
ElseIf s = "-"
Text1.Text = CInt(a) - CInt(Text1.Text)
ElseIf s = "+"
Text1.Text = CInt(a) + CInt(Text1.Text)
ElseIf s = "*"
Text1.Text = CInt(a) * CInt(Text1.Text)
End If
End Sub
Private Sub Command2_Click() 
Text1.Text = Text1 + "2"
End Sub
Private Sub Command3_Click() 
Text1.Text = Text1 + "3"
End Sub
Private Sub Command4_Click() 
Text1.Text = Text1 + "4"
End Sub
Private Sub Command5_Click() 
Text1.Text = Text1 + "5"
End Sub
Private Sub Command6_Click() 
Text1.Text = Text1 + "6"
End Sub
Private Sub Command7_Click() 
Text1.Text = Text1 + "7"
End Sub
Private Sub Command8_Click() 
Text1.Text = Text1 + "8"
End Sub
Private Sub Command9_Click() 
Text1.Text = Text1 + "9"
End Sub*/