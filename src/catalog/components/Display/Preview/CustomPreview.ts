import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CustomPreview extends ResthopperComponent {

	public guid: string = "537b0419-bbc2-4ff4-bf08-afe526367b2c";
	public name: string = "Custom Preview";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Allows for customized geometry previews";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}