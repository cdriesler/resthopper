import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexConjugate extends ResthopperComponent {

	public guid: string = "7d2a6064-51f0-45b2-adc4-f417b30dcd15";
	public name: string = "Complex Conjugate";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Create the conjugate of a Complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}