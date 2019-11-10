import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Isotrim extends ResthopperComponent {

	public guid: string = "6a9ccaab-1b03-484e-bbda-be9c81584a66";
	public name: string = "Isotrim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Extract an isoparametric subset of a surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}