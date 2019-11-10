import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CrossReference extends ResthopperComponent {

	public guid: string = "36947590-f0cb-4807-a8f9-9c90c9b20621";
	public name: string = "Cross Reference";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Cross Reference data from multiple lists";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}