import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SettingsQuality extends ResthopperComponent {

	public guid: string = "1b0ee096-cc76-4847-8941-04a9e256de76";
	public name: string = "Settings (Quality)";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Represents 'Smooth & slower' mesh settings.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}