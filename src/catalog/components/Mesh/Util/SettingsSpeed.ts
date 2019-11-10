import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SettingsSpeed extends ResthopperComponent {

	public guid: string = "255ca3e9-2c1e-443a-a404-e76b5c63f4cb";
	public name: string = "Settings (Speed)";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Represents 'Jagged & faster' mesh settings.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}