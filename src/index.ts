import { Linking } from 'react-native';

/**
 * 打开支付宝
 */
export default function open_alipay(): Promise<boolean> {
	return Linking.openURL('alipays://');
}
