import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SettingsCustom extends ResthopperComponent {

	public guid: string = "4a0180e5-d8f9-46e7-bd34-ced804601462";
	public name: string = "Settings (Custom)";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Represents custom mesh settings.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}