myCookieContainer = ... // your cookies

using(CookieMonsterWebClient wc = new CookieMonsterWebClient())
{
    wc.Cookies = myCookieContainer; //yum yum
    wc.DownloadFile(url, @"C:\bar.txt");
}