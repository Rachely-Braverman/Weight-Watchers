<%@ WebHandler Language="C#" Class="QueryStringHandler" %>  

using System;  
using System.Web;  

public class QueryStringHandler : IHttpHandler   
{  
    public void ProcessRequest (HttpContext context)   
    {  
        HttpResponse r = context.Response;  
        r.ContentType = "image/png";  
        string file = context.Request.QueryString["file"];  
        if (file == "Arrow")  
        {  
            r.WriteFile("Arrow.gif");  
        }  
        else  
        {  
            r.WriteFile("Image.gif");  
        }  
    }  

    public bool IsReusable   
    {  
        get  
        {  
            return false;  
        }  
    }  
}  