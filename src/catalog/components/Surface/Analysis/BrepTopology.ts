import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BrepTopology extends ResthopperComponent {

	public guid: string = "866ee39d-9ebf-4e1d-b209-324c56825605";
	public name: string = "Brep Topology";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get and display the topology of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}