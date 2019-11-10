import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FacetDome extends ResthopperComponent {

	public guid: string = "190c0070-8cbf-4347-94c2-d84bbb488d55";
	public name: string = "Facet Dome";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Create a facetted dome";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}