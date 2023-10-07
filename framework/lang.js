import USJson from './textJson/output.json'


export default {
	// 英文
	'en-US': {
		idx2Tips1: 'Toda segunda-feira, você pode receber novamente o desconto acumulado da semana passada através do gerente de contas',
		idx2Tips: `Você pode retirar este bônus diretamente para o seu banco, ou o bônus no bônus pode ser transferido para o saldo do jogo a qualquer momento e usado no jogo (nota: quando você optar por transferir o bônus para o saldo, precisará de 1 vez o valor do giro para sacar)

Qualquer pessoa, desde que participe da promoção, pode ganhar o bônus de convite
Detalhes da recompensa
1-9 pessoas: R$10 por pessoa
10-14 pessoas: R$ 15 por pessoa
15-19 pessoas: R$20 por pessoa
20-24 pessoas: R$ 24 por pessoa
25-29 pessoas: R$ 26 por pessoa
Mais de 30 pessoas: R$30 por pessoa

Nota: Você pode obter esta recompensa de convite somente quando seu usuário de nível 1 concluir a primeira carga, a contagem efetiva conta apenas o número de pessoas no dia, a nova contagem começará no dia seguinte, não há acúmulo, a recompensa de convite do dia será distribuída automaticamente para sua conta à 01:00 do dia seguinte. Caso a mesma pessoa use contas diferentes ou cadastre várias contas para receber, a conta do jogo pode ser banida pelo sistema, por favor, respeite as regras da plataforma`,
		
	"uni-datetime-picker.selectDate": "select date",
	"uni-datetime-picker.selectTime": "select time",
	"uni-datetime-picker.selectDateTime": "select date and time",
	"uni-datetime-picker.startDate": "data de início",
	"uni-datetime-picker.endDate": "data de término",
	"uni-datetime-picker.startTime": "start time",
	"uni-datetime-picker.endTime": "end time",
	"uni-datetime-picker.ok": "ok",
	"uni-datetime-picker.clear": "clear",
	"uni-datetime-picker.cancel": "cancel",
	"uni-datetime-picker.year": "-",
	"uni-datetime-picker.month": "",
	"uni-calender.MON": "MON",
	"uni-calender.TUE": "TUE",
	"uni-calender.WED": "WED",
	"uni-calender.THU": "THU",
	"uni-calender.FRI": "FRI",
	"uni-calender.SAT": "SAT",
	"uni-calender.SUN": "SUN",
	"uni-calender.confirm": "confirme",
	
	idx2_dlTime: "Terça-feira",

	},

	// 中文
	// 'zh-CN': {},


}

// JSON 字符串
export const jsonLang = {
	'en-US': USJson,
	// 'zh-CN': ``,
};

/**
在需要的页面引用这些变量
比如在 index.vue 页面需要更改导航栏标题
uni.setNavigationBarTitle({
	title: this.$t('index.navTitle')
})

如果是在标签中绑定
<view class="cartu-more">{{$t('index.more')}}</view>
<view class="action">{{ $t("content.derector") }}</view>
 */
