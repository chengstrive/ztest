package com.gd.portal.user.constant

import java.util.regex.Pattern
/**
 * 正则表达式常量
 */
public class MyPattern  {
	public static final String EMAIL="^[\\u0391-\\uFFE5\\w]+[-+.\\u0391-\\uFFE5\\w]*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*\$" //邮箱
	public static final String LOGIN_PASSWORD="^\\S{6,20}\$" //登录密码
	public static final String MOBILE="^1[123456789]\\d{9}\$" //手机号
	public static final String VOUCHER="^([a-zA-Z0-9]{8})+(,[a-zA-Z0-9]{8})*\$" //优惠码
	public static final String MANYMOBILES="^(1[3456789]\\d{9})+(,1[3456789]\\d{9})*\$" //多个手机号,英文逗号分割
	public static final String BANKCARD="^\\d{9,25}\$" //银行卡号
	public static final String AMOUNT="^(\\d{1,9}(\\.\\d{1,3})?)\$" //金额
	public static final String ENGLISH="^[A-Za-z]+\$" //英文字符
	public static final String PIN="^\\d{6}\$" //6位数字密码
	public static final String REGIST_PASSWORD="^\\S{8,20}\$" //聚POS注册密码
	public static final String BANKACCNAME="^[\\u0391-\\uFFE5a-zA-Z·. ]+\$" //收款账号的姓名或者公司名称，只能中英文和·.
	public static final String PASSWORD="^(?![0-9]+\$)(?![a-zA-Z]+\$)[0-9A-Za-z]{8,16}\$" //登陆密码
	public static final String INTEGER="^[-\\+]?[\\d]*\$" //整数
	public static final String RECEIPTTITLE="^((?!(银联|银行|贷款|提额|信用卡|支付|套现|花呗|投资|理财|金融|客服|余额充值|财务|微信|红包|激活)).)*\$"
		
	public static boolean matches (String pattern,String dest){
		return Pattern.matches(pattern,dest)
	}
	
 
	/**
	 * 校验正则表达式
	 *@param pattern 正则表达式
	 *@param dest 目标字符串
	 *@param errorMsg 错误信息
	 */
	public static void isValid(String pattern,String dest,String errorMsg){
				assert dest:X("目标字符串不能为空")
				assert Pattern.matches(pattern,dest):X(errorMsg)
		}
	/**
	 * 校验费率格式
	 *@param pattern 正则表达式
	 *@param dest 目标字符串
	 *@param errorMsg 错误信息
	 */
	public static void isValidFee(String pattern,String dest,String errorMsg,long minValue){
		assert dest:X(errorMsg+"费率不能为空")
		assert Pattern.matches(pattern,dest):X(errorMsg+"费率格式不正确，正确的格式如：0.78")
		def minStr=minValue/10000+"%";
		assert (long)(dest.toDouble()*10000)>=minValue&&(long)(dest.toDouble()*10000)<=20000:errorMsg+"费率必须在${minStr}-2之间"
	}
	
	
	/**
	 * 校验费率格式
	 *@param pattern 正则表达式
	 *@param dest 目标字符串
	 *@param errorMsg 错误信息
	 */
	public static void isValidFee2(String pattern,String dest,String errorMsg,long minValue,long maxValue){
		assert dest:X(errorMsg+"费率不能为空")
		assert Pattern.matches(pattern,dest):X(errorMsg+"费率格式不正确，正确的格式如：0.78")
		def minStr=minValue/10000+"%";
		def maxStr=maxValue/10000+"%";
		assert (long)(dest.toDouble()*10000)>=minValue&&(long)(dest.toDouble()*10000)<=maxValue:errorMsg+"费率必须在${minStr}-${maxStr}之间"
	}
	
	
	/**
	 * 校验正则表达式
	 *@param pattern 正则表达式
	 *@param dest 目标字符串
	 *@param errorMsg 错误信息
	 */
	public static void isValidUser(String pattern1,String pattern2,String dest,String errorMsg){
				assert dest:X("目标字符串不能为空")
				assert Pattern.matches(pattern1,dest)||Pattern.matches(pattern2,dest):X(errorMsg)
		}
	/**
	 * 校验18位身份证是否合法
	 * @param idno 身份证号
	 * @param errorMsg 错误信息
	 * @return void
	 */
	public static void isValidIdno(String idno,String errorMsg){
		if(idno==null||idno.length()!=18){
			println "idno:"+idno
			assert false:X(errorMsg)
		}
 
		String[] powers=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"] as String[];
		String[] parityBit=["1","0","X","9","8","7","6","5","4","3","2"] as String[];
		String _num=idno.substring(0,17);
		String _parityBit=idno.substring(17);
		int _power=0;
		for(int i=0;i<17;i++){
				//校验每一位的合法性
				if(_num.charAt(i)<'0'||_num.charAt(i)>'9'){
					break;
				}else{
					_power+=Integer.parseInt(String.valueOf(_num.charAt(i)))*Integer.parseInt(powers[i]);
				}
		}
			//取模
			if(_parityBit.equalsIgnoreCase("x")){
				_parityBit="X";
			}
		int mod=_power%11;
		if(!parityBit[mod].equals(_parityBit)){
			println "idno:"+idno
			assert false:X(errorMsg)
		}
	}
}
