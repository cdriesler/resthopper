using System;
using System.IO;
using System.Linq;
using System.Runtime.Loader;
using System.Reflection;
using Grasshopper.Kernel;

namespace Resthopper
{
    class Program
    {
        static void Main(string[] args)
        {           
            var path = new FileInfo(@".\dll\Grasshopper.dll");
            var assembly = AssemblyLoadContext.Default.LoadFromAssemblyPath(path.FullName);

            try {
                Console.WriteLine(assembly.GetTypes());
            }
            catch (ReflectionTypeLoadException e) {
                e.Types
                .Where(t => t != null)
                .Where(t => t.IsSubclassOf(typeof(GH_Component)))
                .ToList()
                .ForEach(t => Console.WriteLine(t.Name));
            }
        }
    }
}
