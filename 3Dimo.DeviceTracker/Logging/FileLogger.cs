using Logging.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logging
{
    public class FileLogger : ILogger
    {
        private string directoryPath = @"C:\3dimo.devicetracker.logs";
        public void Log(string content)
        {
            var formattedContent = format(content);

            Directory.CreateDirectory(directoryPath);
            var filePath = $@"{directoryPath}\trackerlog_{DateTime.Now.ToString("yyyyMMdd")}.txt";
            
            File.AppendAllText(filePath, formattedContent);
            Console.WriteLine(formattedContent);
        }

        private string format(string content)
        {
            return $"{DateTime.Now}: {content}\n";
        }
    }
}
