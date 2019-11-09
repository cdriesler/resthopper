import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PolygonCenter extends ResthopperComponent {

	public guid: string = "59e94548-cefd-4774-b3de-48142fc783fb";
	public name: string = "Polygon Center";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the center point (average) for a polyline.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}