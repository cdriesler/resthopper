static void Crawl() {
    var gha = Grasshopper.Instances.ComponentServer.Libraries;
    
    var names = new List<string>();
    var ids = new List<string>();
    
    var proxies = Grasshopper.Instances.ComponentServer.ObjectProxies;
    
    for (int i = 0; i < proxies.Count; i++) {
      ids.Add(proxies[i].Guid.ToString());
      names.Add(proxies[i].Desc.Name);
    }
    
    var z = ids.IndexOf(ids.Find(w => w.IndexOf("ce46b74e-00c9-43c4-805a-193b69ea4a11") >= 0));

    A = names[z];
    B = ids[z];
}