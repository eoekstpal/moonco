<template>
	<div class="min-h-[812px]">
		<div class="w-[375px] pb-[88px] bg-white color-black">
			<!--img-->
			<div class="w-full h-[240px] relative">
				<img
					:src="fullImageUrl(product.productImageUrl)"
					class="w-full h-[240px] object-cover"
				/>
				<!--뒤로가기버튼-->
				<button @click="this.$router.go(-1)" class="back-absolute-style">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						class="back-absolute-style"
					>
						<path
							d="M3.54995 12L10.9 19.35C11.15 19.6 11.2708 19.8917 11.2625 20.225C11.2541 20.5583 11.125 20.85 10.875 21.1C10.625 21.35 10.3333 21.475 9.99995 21.475C9.66662 21.475 9.37495 21.35 9.12495 21.1L1.42495 13.425C1.22495 13.225 1.07495 13 0.974951 12.75C0.874951 12.5 0.824951 12.25 0.824951 12C0.824951 11.75 0.874951 11.5 0.974951 11.25C1.07495 11 1.22495 10.775 1.42495 10.575L9.12495 2.87499C9.37495 2.62499 9.67078 2.50415 10.0125 2.51249C10.3541 2.52082 10.65 2.64999 10.9 2.89999C11.15 3.14999 11.275 3.44165 11.275 3.77499C11.275 4.10832 11.15 4.39999 10.9 4.64999L3.54995 12Z"
							fill="white"
						/>
					</svg>
				</button>
				<div class="absolute-style">
					<button @click="this.$router.go(0)">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							class="refresh-icon"
						>
							<path
								d="M9.825 20.7C8.10833 20.2167 6.70833 19.2708 5.625 17.8625C4.54167 16.4542 4 14.8333 4 13C4 12.05 4.15833 11.1458 4.475 10.2875C4.79167 9.42915 5.24167 8.64165 5.825 7.92499C6.00833 7.72499 6.23333 7.62082 6.5 7.61249C6.76667 7.60416 7.00833 7.70832 7.225 7.92499C7.40833 8.10832 7.50417 8.33332 7.5125 8.59999C7.52083 8.86665 7.43333 9.11665 7.25 9.34999C6.85 9.86665 6.54167 10.4333 6.325 11.05C6.10833 11.6667 6 12.3167 6 13C6 14.35 6.39583 15.5542 7.1875 16.6125C7.97917 17.6708 9 18.3917 10.25 18.775C10.4667 18.8417 10.6458 18.9667 10.7875 19.15C10.9292 19.3333 11 19.5333 11 19.75C11 20.0833 10.8833 20.3458 10.65 20.5375C10.4167 20.7292 10.1417 20.7833 9.825 20.7ZM14.175 20.7C13.8583 20.7833 13.5833 20.725 13.35 20.525C13.1167 20.325 13 20.0583 13 19.725C13 19.525 13.0708 19.3333 13.2125 19.15C13.3542 18.9667 13.5333 18.8417 13.75 18.775C15 18.375 16.0208 17.65 16.8125 16.6C17.6042 15.55 18 14.35 18 13C18 11.3333 17.4167 9.91666 16.25 8.74999C15.0833 7.58332 13.6667 6.99999 12 6.99999H11.925L12.325 7.39999C12.5083 7.58332 12.6 7.81665 12.6 8.09999C12.6 8.38332 12.5083 8.61665 12.325 8.79999C12.1417 8.98332 11.9083 9.07499 11.625 9.07499C11.3417 9.07499 11.1083 8.98332 10.925 8.79999L8.825 6.69999C8.725 6.59999 8.65417 6.49165 8.6125 6.37499C8.57083 6.25832 8.55 6.13332 8.55 5.99999C8.55 5.86665 8.57083 5.74165 8.6125 5.62499C8.65417 5.50832 8.725 5.39999 8.825 5.29999L10.925 3.19999C11.1083 3.01665 11.3417 2.92499 11.625 2.92499C11.9083 2.92499 12.1417 3.01665 12.325 3.19999C12.5083 3.38332 12.6 3.61665 12.6 3.89999C12.6 4.18332 12.5083 4.41665 12.325 4.59999L11.925 4.99999H12C14.2333 4.99999 16.125 5.77499 17.675 7.32499C19.225 8.87499 20 10.7667 20 13C20 14.8167 19.4583 16.4333 18.375 17.85C17.2917 19.2667 15.8917 20.2167 14.175 20.7Z"
								fill="#1CB08C"
							/>
						</svg>
					</button>
					<div class="remaining">{{ product.availableStock }}개 남음</div>
				</div>
			</div>
			<!--text-->
			<div class="p-4">
				<div>
					<p class="text-black text-lgB pb-1">{{ product.name }}</p>
					<p>
						{{ product.description }}
					</p>
				</div>
				<div class="pt-2">
					<div class="flex">
						<p class="text-sm text-[#1CB08C] pr-1">
							{{ roundedDiscountRate(product.discountRate) }}%
						</p>
						<p class="text-sm text-disabledTextGray line-through">
							{{ product.originalPrice }}원
						</p>
					</div>
					<p class="text-lgB text-[#1CB08C]">{{ product.discountedPrice }}</p>
				</div>
			</div>
			<!--픽업 시간-->
			<div class="px-4 py-[13px] flex border-y border-disabledGray">
				<p class="text-baseB pr-6">픽업가능시간</p>
				<p class="text-base text-bodyBlack">오후 6:00 ~ 오후 8:30</p>
			</div>
			<!--가게 정보-->
			<div class="px-4 py-4">
				<p class="text-baseB pb-1">가게 정보</p>
				<!--주소도-->
				<div class="text-base text-bodyBlack">
					<p class="pb-1">가게 이름: {{ product.storeName }}</p>
					<p class="pb-2">가게 위치: 이후 구현 예정</p>
				</div>
				<!--지도-->
				<div class="w-[342px] h-[180px] ml-[1px] rounded-lg bg-bodyBlack">
					<!-- <KakaoMap
						:lat="coordinate.lat"
						:lng="coordinate.lng"
						:draggable="true"
					>
						<KakaoMapMarker
							:lat="coordinate.lat"
							:lng="coordinate.lng"
						></KakaoMapMarker>
					</KakaoMap> -->
				</div>
				<!-- <div ref="mapContainer" class="w-[100px] h-[100px]"></div> -->
			</div>
			<div id="map"></div>
			<div class="order-btn-div">
				<button @click="goToOrderDetails(product)" class="order-btn">
					주문하기
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import http from '@/api/http.js';
import { mapActions } from 'vuex';
// import { useKakao } from 'vue3-kakao-maps/@utils';
// import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
// //kakaoMap
// useKakao(import.meta.env.VITE_APP_KAKAO_JavaScript_KEY);
// const coordinate = {
// 	lat: 37.566826,
// 	lng: 126.9786567,
// };

export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			product: {}, // API에서 받아올 상품 정보
		};
	},
	mounted() {
		// URL 파라미터에서 id를 가져와 상품 정보 요청
		const productId = this.$route.params.productId;
		this.fetchProductDetail(productId);
		console.log(productId);
	},
	created() {
		// Router의 state에서 productId 가져오기
		if (this.$route.state && this.$route.state.productId) {
			this.productId = this.$route.state.productId;
		} else {
			console.error('상품 ID를 찾을 수 없습니다.');
		}
	},
	methods: {
		// API 호출로 상품 상세 정보 가져오기
		fetchProductDetail() {
			http
				.get(`/api/products/get/${this.id}`)
				.then(res => {
					this.product = res.data.data;
					console.log(this.product);
				})
				.catch(err => {
					console.log(err);
				});
		},
		goToOrderDetails(product) {
			this.$router.push(`/orderdetails/${product.name}/${product.productId}`); // /name/id로 라우팅
		},
		// 이미지 경로 변환
		fullImageUrl(imagePath) {
			const baseUrl = import.meta.env.VITE_APP_API_URL;
			const imagePathUrl = `${baseUrl}${imagePath}`;
			return imagePathUrl;
		},
		// 할인율 반올림 계산
		roundedDiscountRate(rate) {
			return Math.round(rate);
		},
	},
};
</script>
<style lang="scss" scoped>
.back-absolute-style {
	position: absolute;
	left: 8px;
	top: 6px;
}
.refresh-icon {
	background: var(--20, #d2efe8);
	border-radius: 4px;
	margin-right: 4px;
}
.absolute-style {
	position: absolute;
	display: flex;
	right: 12px;
	bottom: 12px;
}
.remaining {
	height: 24px;
	align-items: center;
	display: flex;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	line-height: 22px;
	color: var(--Point, #1cb08c);
	background: var(--20, #d2efe8);
	border-radius: 4px;
	padding: 4px 2px;
}
.order-btn-div {
	width: 343px;
	border-radius: 10px 10px 0 0;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
	align-items: center;
	padding-bottom: 32px;
	background: var(--White, #fff);
	position: absolute;
}
.order-btn {
	width: 343px;
	height: 48px;
	border-radius: 10px;
	background: var(--Point, #1cb08c);
	padding: 12px 84px;
	margin: 0 auto;
	color: white;
	text-align: center;
}
/* #map {
	width: 400px;
	height: 400px;
} */
</style>
