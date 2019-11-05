static void Crawl() {
    var gha = Grasshopper.Instances.ComponentServer.Libraries;
    
    var anames = new List<string>();
    var names = new List<string>();
    var ids = new List<string>();
    
    var n = Grasshopper.Instances.ComponentServer.ObjectProxyNames;
    var p = Grasshopper.Instances.ComponentServer.ObjectProxies;
    
    for (int i = 0; i < n.Count; i++) {
      names.Add(n[i]);
    }
    
    for (int i = 0; i < p.Count; i++) {
      ids.Add(p[i].Guid.ToString());
    }

    for (int i = 0; i < gha.Count; i++) {
      var t = gha[i].Assembly.GetTypes();
      
      Grasshopper.Instances.ComponentServer.FindObjects(gha[i].Id).ForEach(g => {
        names.Add(g.Type.Name);
        ids.Add(g.Guid.ToString());
        });
      
      anames.Add(gha[i].Assembly.GetName().ToString());

    }
    
    var z = names.IndexOf(names.Find(w => w.IndexOf("Param_Number") >= 0));

    A = names[z];
    B = ids[z];
}