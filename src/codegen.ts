import axios from 'axios';
import Parse from './predicates/Parse';
import ResthopperComponent from './models/ResthopperComponent';
import ResthopperParameter from './models/ResthopperParameter';

// Get server configuration and convert response objects to resthopper model
axios.get("http://localhost:8081/grasshopper").then(x => {
    let parameters: ResthopperParameter[] = [];
    let components: ResthopperComponent[] = [];

    (<any[]>x.data).forEach(obj => {
        const c = Parse.ComputeObjectAsResthopperComponent(obj);

        if (c.isObsolete) {
            return;
        }

        if (c.category == "Params") {
            const validSubCategories = [ "Primitive", "Geometry" ];
            
            if (validSubCategories.includes(c.subCategory)) {
                parameters.push(Parse.ResthopperComponentAsResthopperParam(c));
            }
        }
        else {
            const invalidLibraries = [ "Galapagos" ];

            if (!invalidLibraries.includes(c.libraryName)) {
                components.push(c);
            }
        }
    });

    console.log(`${parameters.length} parameters & ${components.length} components`);
});
