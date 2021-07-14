import { ColorVariantSet } from '../models/color-variant-set';
import { ToastVariant } from '../enums/toast-variant';

export const COLOR_MAP: ColorVariantSet = {
	[ToastVariant.Success]: {
		text: '#ffffff',
		background: '#4e576b',
	},
	[ToastVariant.Error]: {
		text: '#e12a37',
		background: '#fef7f7',
	},
};
