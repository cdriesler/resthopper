using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Runtime.Loader;
using System.Reflection;
using Grasshopper.Kernel;

namespace Resthopper
{
    class Program
    {
        static void Main(string[] args)
        {           
            // var dir = new DirectoryInfo(@".\dll");
            // var paths = System.IO.Directory.GetFiles(@".\dll");
            
            // var names = new List<string>();

            // foreach(var path in paths) {

            //     var assembly = Assembly.LoadFrom(path);

            //     try {
            //         Console.WriteLine(assembly.GetTypes());
            //     }
            //     catch (ReflectionTypeLoadException e) {
            //         e.Types
            //         .Where(t => t != null)
            //         .Where(t => t.IsSubclassOf(typeof(GH_Component)))
            //         //.Where(t => t.Name.IndexOf("GH_") >= 0)
            //         .ToList()
            //         .ForEach(t => Console.WriteLine(t.Name));
            //     }
            // }

            var path = new FileInfo(@".\dll\MathComponents.dll");
            var assembly = Assembly.LoadFrom(path.FullName);

            try {
                Console.WriteLine(assembly.GetTypes());
            }
            catch (ReflectionTypeLoadException e) {
                var types = new List<Type>();
                var flattened = new List<Type>();

                foreach(var t in e.Types) {
                    if (t == null) {
                        continue;
                    }
                    types.Add(t);
                }

                do {
                    var nested = new List<Type>();

                    types.ForEach(x => {
                        if (x.GetNestedTypes().Length > 0) {
                            flattened.Add(x);
                            x.GetNestedTypes().ToList().ForEach(y => {
                                nested.Add(y);
                            });
                        }
                        else {
                            flattened.Add(x);
                        }
                    });

                    types = nested;
                }
                while(types.Count > 0);

                flattened.ForEach(x => { 
                    Console.WriteLine(x.Name);
                });
                // e.Types
                // .Where(t => t != null)
                // .Where(t => t.IsSubclassOf(typeof(GH_Component)))
                // .ToList()
                // .ForEach(x => Console.WriteLine(x.Name));
            }
        }
    }
}
