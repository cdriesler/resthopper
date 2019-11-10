import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDBox extends ResthopperComponent {

	public guid: string = "10487e4e-a405-48b5-b188-5a8a6328418b";
	public name: string = "SubD Box";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Create a subdivision box";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}