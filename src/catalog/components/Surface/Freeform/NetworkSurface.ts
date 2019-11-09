import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class NetworkSurface extends ResthopperComponent {

	public guid: string = "71506fa8-9bf0-432d-b897-b2e0c5ac316c";
	public name: string = "Network Surface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface from curve networks";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}