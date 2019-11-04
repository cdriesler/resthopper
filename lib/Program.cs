using System;
using System.IO;
using System.Linq;
using System.Reflection;
using Grasshopper.Kernel;

namespace Resthopper
{
    class Program
    {
        static void Main(string[] args)
        {
            var path = new FileInfo(@".\dll\Grasshopper.dll");
            var assembly = Assembly.Load(path.FullName);

            //var types = assembly.GetTypes().Where(x => x.IsSubclassOf(typeof(GH_Component)));
            //Console.WriteLine(assembly);
            Console.WriteLine(assembly.GetTypes()[0]);
            // foreach(var t in types) {
            //     Console.WriteLine(t);
            // }
        }
    }
}
