import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class StreamGate extends ResthopperComponent {

	public guid: string = "71fcc052-6add-4d70-8d97-cfb37ea9d169";
	public name: string = "Stream Gate";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Redirects a stream into specific outputs.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}