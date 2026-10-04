import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'

import images_bf9eb653_12ed_49d0_a9bf_d43c842a96b8_png from '/images/bf9eb653-12ed-49d0-a9bf-d43c842a96b8.png';
import images_fe8e3c0d_e529_4c5e_b9c3_a92adc133a79_png from '/images/fe8e3c0d-e529-4c5e-b9c3-a92adc133a79.png';
import images_1a05e6eb_c9de_4129_807e_2262432111ae_png from '/images/1a05e6eb-c9de-4129-807e-2262432111ae.png';
import images_d79e0a04_e5d8_49eb_9614_411ca50030da_png from '/images/d79e0a04-e5d8-49eb-9614-411ca50030da.png';
import images_6192e999_9f0e_459e_80b5_6b476cbb72df_png from '/images/6192e999-9f0e-459e-80b5-6b476cbb72df.png';
import images_13c2546d_e697_413f_ad63_860e661618d2_png from '/images/13c2546d-e697-413f-ad63-860e661618d2.png';
import images_bca4259c_0950_41e4_a074_8bd4276ca414_png from '/images/bca4259c-0950-41e4-a074-8bd4276ca414.png';
import images_1b5db53b_9d14_4942_bdb3_7cf37fc50a62_png from '/images/1b5db53b-9d14-4942-bdb3-7cf37fc50a62.png';
import images_8ec50035_95ab_4d96_b827_865d8a7796e2_png from '/images/8ec50035-95ab-4d96-b827-865d8a7796e2.png';
import images_127eeb09_91a4_4722_ad75_972be3c66a6c_png from '/images/127eeb09-91a4-4722-ad75-972be3c66a6c.png';
import images_cdc556f6_ae99_4845_9318_46859855573f_png from '/images/cdc556f6-ae99-4845-9318-46859855573f.png';
import images_e878a062_2c56_4998_b34d_d27b4583b925_png from '/images/e878a062-2c56-4998-b34d-d27b4583b925.png';
import images_f585ebd7_1435_4a87_81ae_d032bfaf7a2b_png from '/images/f585ebd7-1435-4a87-81ae-d032bfaf7a2b.png';
import images_320163a3_831f_49ec_8fec_a8284f5fe45c_png from '/images/320163a3-831f-49ec-8fec-a8284f5fe45c.png';
import images_9cdd3b8e_3d28_4a90_8e80_8e0f157e93bc_png from '/images/9cdd3b8e-3d28-4a90-8e80-8e0f157e93bc.png';
import images_78e92f89_357e_4447_9e1b_3b84e8af1e72_png from '/images/78e92f89-357e-4447-9e1b-3b84e8af1e72.png';
import images_fd2369a7_885a_4196_9096_afd72ba1169b_png from '/images/fd2369a7-885a-4196-9096-afd72ba1169b.png';
import images_00a7abaf_3ab8_4b9e_b0ff_2b74adacde68_png from '/images/00a7abaf-3ab8-4b9e-b0ff-2b74adacde68.png';
import images_c5e494b7_d762_457d_8ddb_19e6bc03f1dc_png from '/images/c5e494b7-d762-457d-8ddb-19e6bc03f1dc.png';
import images_c25e8561_16b9_49dc_848d_436b0998680d_png from '/images/c25e8561-16b9-49dc-848d-436b0998680d.png';
import images_524ab270_eef3_44bf_806b_f51b9679fe71_png from '/images/524ab270-eef3-44bf-806b-f51b9679fe71.png';
import images_d35dd6bb_0f52_449c_bab0_41bbd277ee9f_png from '/images/d35dd6bb-0f52-449c-bab0-41bbd277ee9f.png';
import images_a43eb0f2_02c1_44a5_a7b2_84c042b8d23d_png from '/images/a43eb0f2-02c1-44a5-a7b2-84c042b8d23d.png';
import images_f3735e4b_36b0_432d_a7a4_d6ab1db8bc4e_png from '/images/f3735e4b-36b0-432d-a7a4-d6ab1db8bc4e.png';
import images_aa426193_33b1_4da0_a529_7ae974bc7c97_png from '/images/aa426193-33b1-4da0-a529-7ae974bc7c97.png';
import images_a125a7ee_62f0_4ea5_ae6d_7e727ca76536_png from '/images/a125a7ee-62f0-4ea5-ae6d-7e727ca76536.png';
import images_7e063a3e_c5cb_43c9_a351_2ee37c3de074_png from '/images/7e063a3e-c5cb-43c9-a351-2ee37c3de074.png';
import images_80af296b_caae_4514_951a_adc1b5c50e60_png from '/images/80af296b-caae-4514-951a-adc1b5c50e60.png';
import images_14fa56e7_540b_4918_9bb1_bb0edef994dc_png from '/images/14fa56e7-540b-4918-9bb1-bb0edef994dc.png';
import images_30196112_b231_43e0_add4_e29022919254_png from '/images/30196112-b231-43e0-add4-e29022919254.png';
import images_7201608b_1be3_4a8e_8c3b_7f02ca487ae5_png from '/images/7201608b-1be3-4a8e-8c3b-7f02ca487ae5.png';
import images_0967950f_69cc_4151_b042_fdd15616a661_png from '/images/0967950f-69cc-4151-b042-fdd15616a661.png';
import images_9d786483_eb12_4eac_ae74_c1f9269b527b_png from '/images/9d786483-eb12-4eac-ae74-c1f9269b527b.png';
import images_d9a0dac4_c4f9_44f7_915d_ed243246780d_png from '/images/d9a0dac4-c4f9-44f7-915d-ed243246780d.png';
import images_99c855b0_be88_4988_8e55_db117e81e883_png from '/images/99c855b0-be88-4988-8e55-db117e81e883.png';
import images_08b5418c_2226_4722_aa3b_8635e2c37d55_png from '/images/08b5418c-2226-4722-aa3b-8635e2c37d55.png';
import images_41f1b41b_a70c_421b_8d15_6e3d46ff2930_png from '/images/41f1b41b-a70c-421b-8d15-6e3d46ff2930.png';
import images_0c40fbd8_3f63_4b14_8b9b_8a595343c5e9_png from '/images/0c40fbd8-3f63-4b14-8b9b-8a595343c5e9.png';
import images_d8ffcf46_20c3_4058_bf36_59daa7d2cddc_png from '/images/d8ffcf46-20c3-4058-bf36-59daa7d2cddc.png';
import images_36af1754_b524_4a86_a87d_cb3913c5a043_png from '/images/36af1754-b524-4a86-a87d-cb3913c5a043.png';
import images_2ca2a9c8_25fb_4103_b74a_5bdbb613cd9b_png from '/images/2ca2a9c8-25fb-4103-b74a-5bdbb613cd9b.png';
import images_ae429d66_7359_4b6c_a569_40f0a595ed65_png from '/images/ae429d66-7359-4b6c-a569-40f0a595ed65.png';
import images_97c832bc_2c70_4c7c_816a_c3f3e05baf8f_png from '/images/97c832bc-2c70-4c7c-816a-c3f3e05baf8f.png';
import images_687d95e9_d800_46df_88ba_1cd7f0ba3c3e_png from '/images/687d95e9-d800-46df-88ba-1cd7f0ba3c3e.png';
import images_0babcbbd_c9c1_47fe_ab33_ebd0f2a6c1be_png from '/images/0babcbbd-c9c1-47fe-ab33-ebd0f2a6c1be.png';
import images_52c4e45e_12d0_43b2_94a2_d640e5ae1d05_png from '/images/52c4e45e-12d0-43b2-94a2-d640e5ae1d05.png';
import images_d3610e17_88f8_4dea_be55_148000670ca5_png from '/images/d3610e17-88f8-4dea-be55-148000670ca5.png';
import images_7d98811e_b790_4cdf_8505_161ef7f3f342_png from '/images/7d98811e-b790-4cdf-8505-161ef7f3f342.png';
import images_0d153ae1_9564_45c5_a525_d67f10f44e09_png from '/images/0d153ae1-9564-45c5-a525-d67f10f44e09.png';
import images_f94b179e_e33e_4d69_9d2d_17165171e10a_png from '/images/f94b179e-e33e-4d69-9d2d-17165171e10a.png';
import images_971c6b78_6252_4947_8858_fae629afcbc0_png from '/images/971c6b78-6252-4947-8858-fae629afcbc0.png';
import images_e517b4a4_991b_4e78_8f75_5ac671a9a50b_png from '/images/e517b4a4-991b-4e78-8f75-5ac671a9a50b.png';
import images_8c04e6fc_bb71_4ab1_b31e_ff43275369bd_png from '/images/8c04e6fc-bb71-4ab1-b31e-ff43275369bd.png';
import images_c8c8c366_d409_4b82_adaf_1dd0a70d590b_png from '/images/c8c8c366-d409-4b82-adaf-1dd0a70d590b.png';
import images_eb7870c8_a830_40e6_a48c_24b59eecb41a_png from '/images/eb7870c8-a830-40e6-a48c-24b59eecb41a.png';
import images_0b1496a7_b543_4e79_9c5d_02cf41c1570a_png from '/images/0b1496a7-b543-4e79-9c5d-02cf41c1570a.png';
import images_a1654211_6bc3_4b1f_bb35_7930af1e3ef3_png from '/images/a1654211-6bc3-4b1f-bb35-7930af1e3ef3.png';
import images_d23e97ed_beb2_4636_8ba1_52f9be798d20_png from '/images/d23e97ed-beb2-4636-8ba1-52f9be798d20.png';
import images_3120ddb2_c159_4074_9ca2_48e7931a15e9_png from '/images/3120ddb2-c159-4074-9ca2-48e7931a15e9.png';
import images_dbc6212c_22c5_4466_841d_98a5b4c0aa6c_png from '/images/dbc6212c-22c5-4466-841d-98a5b4c0aa6c.png';
import images_b2bf1351_4ed7_42c5_b215_9f12e2b58495_png from '/images/b2bf1351-4ed7-42c5-b215-9f12e2b58495.png';
import images_4d2f3bb2_6e1b_46d0_9694_5e48ef35fa41_png from '/images/4d2f3bb2-6e1b-46d0-9694-5e48ef35fa41.png';
import images_bd2d7ccd_a260_41c1_9ae9_6167b45efbd7_png from '/images/bd2d7ccd-a260-41c1-9ae9-6167b45efbd7.png';
import images_fc56615c_f946_48d1_ae40_472b7d6babb4_png from '/images/fc56615c-f946-48d1-ae40-472b7d6babb4.png';
import images_4cb0638e_6476_41d6_8cce_be2cdc4ea343_png from '/images/4cb0638e-6476-41d6-8cce-be2cdc4ea343.png';
import images_955a9be3_8b9a_4101_9476_5cc7d4d8ee12_png from '/images/955a9be3-8b9a-4101-9476-5cc7d4d8ee12.png';
import images_ceef1efe_f98c_477b_9158_368c7c3013d0_png from '/images/ceef1efe-f98c-477b-9158-368c7c3013d0.png';
import images_6c47a46d_4747_44cc_90a8_060eb2ea14de_png from '/images/6c47a46d-4747-44cc-90a8-060eb2ea14de.png';
import images_07350e0e_d1a3_4656_a536_010c21563aab_png from '/images/07350e0e-d1a3-4656-a536-010c21563aab.png';
import images_e0c4f8ec_d2b5_4e46_ab8c_f753f13e3959_png from '/images/e0c4f8ec-d2b5-4e46-ab8c-f753f13e3959.png';
import images_a21ab74a_deb3_4e82_9c36_9e980225a733_png from '/images/a21ab74a-deb3-4e82-9c36-9e980225a733.png';
import images_19fd27d6_f87c_49cb_b46a_0b3e643cb443_png from '/images/19fd27d6-f87c-49cb-b46a-0b3e643cb443.png';
import images_2e7a95e2_7040_4d59_ac89_53854abd4f3d_png from '/images/2e7a95e2-7040-4d59-ac89-53854abd4f3d.png';
import images_19776d76_8bd4_45d7_8050_e893433b99c8_png from '/images/19776d76-8bd4-45d7-8050-e893433b99c8.png';
import images_11b6fdab_4703_4e43_b3d2_43ee92bee77b_png from '/images/11b6fdab-4703-4e43-b3d2-43ee92bee77b.png';
import images_7fd7824d_ec33_4643_9cb9_2c2cafa4655f_png from '/images/7fd7824d-ec33-4643-9cb9-2c2cafa4655f.png';
import images_e00e1390_1622_46a4_b447_11899f610aa4_png from '/images/e00e1390-1622-46a4-b447-11899f610aa4.png';
import images_b14182c5_08e6_4957_9f56_65d300ae9ddb_png from '/images/b14182c5-08e6-4957-9f56-65d300ae9ddb.png';
import images_e9e8be55_c493_431e_982b_9f0f84f38026_png from '/images/e9e8be55-c493-431e-982b-9f0f84f38026.png';
import images_2dde6b53_68e4_44a4_9e22_95c9ae19ccef_png from '/images/2dde6b53-68e4-44a4-9e22-95c9ae19ccef.png';
import images_791e676d_3e9a_42c0_927c_5f0fc2eee557_png from '/images/791e676d-3e9a-42c0-927c-5f0fc2eee557.png';
import images_33dde5cd_e5f7_4ab1_99fd_5553a2b37659_png from '/images/33dde5cd-e5f7-4ab1-99fd-5553a2b37659.png';
import images_5054fd27_39a6_4c81_a63b_e9f9c415b01b_png from '/images/5054fd27-39a6-4c81-a63b-e9f9c415b01b.png';
import images_618114c0_e15c_4588_a8ba_18b446c3b134_png from '/images/618114c0-e15c-4588-a8ba-18b446c3b134.png';
import images_75b959f9_edd8_4479_88bb_cb5fd919aa99_png from '/images/75b959f9-edd8-4479-88bb-cb5fd919aa99.png';
import images_54edcac6_3a96_4c01_a186_2c7b6c92a054_png from '/images/54edcac6-3a96-4c01-a186-2c7b6c92a054.png';
import images_f281cd5a_5303_4daa_a7db_315283fb295d_png from '/images/f281cd5a-5303-4daa-a7db-315283fb295d.png';
import images_c512b347_782a_4454_bc38_535c9fa3734a_png from '/images/c512b347-782a-4454-bc38-535c9fa3734a.png';
import images_5a2f2617_37ee_4685_841d_47c6432e0c0e_png from '/images/5a2f2617-37ee-4685-841d-47c6432e0c0e.png';
import images_70d7b867_fee5_4601_ab37_edd491d0a443_png from '/images/70d7b867-fee5-4601-ab37-edd491d0a443.png';
import images_a94f3cb4_8b8c_4c0b_91cc_3942b3daf6eb_png from '/images/a94f3cb4-8b8c-4c0b-91cc-3942b3daf6eb.png';
import images_43e2f30d_4023_46b0_ac08_344b099d2916_png from '/images/43e2f30d-4023-46b0-ac08-344b099d2916.png';
import images_94d2f23b_d3df_4bce_a859_25d04e3cc3df_png from '/images/94d2f23b-d3df-4bce-a859-25d04e3cc3df.png';
import images_b4c0d1d5_5865_4c1d_886c_37ab2c8f3e6f_png from '/images/b4c0d1d5-5865-4c1d-886c-37ab2c8f3e6f.png';
import images_8440f11a_5588_4d6a_a405_e3cfd5e54c5b_png from '/images/8440f11a-5588-4d6a-a405-e3cfd5e54c5b.png';
import images_aac600aa_d6fa_4917_b8ab_01ad743740af_png from '/images/aac600aa-d6fa-4917-b8ab-01ad743740af.png';
import images_9f42e8ac_3e91_4ad1_955b_2f895bbef58d_png from '/images/9f42e8ac-3e91-4ad1-955b-2f895bbef58d.png';
import images_ec110371_9fec_43ce_b0a7_e869d2ff19c5_png from '/images/ec110371-9fec-43ce-b0a7-e869d2ff19c5.png';
import images_493d8a96_48b5_4d14_a6e0_606c7da9bbb9_png from '/images/493d8a96-48b5-4d14-a6e0-606c7da9bbb9.png';
import images_00068ff9_f13e_4cbd_a6f1_f3ac2c02eec4_png from '/images/00068ff9-f13e-4cbd-a6f1-f3ac2c02eec4.png';
import images_b5771954_d26c_4e9d_9ff8_a88b693acbc3_png from '/images/b5771954-d26c-4e9d-9ff8-a88b693acbc3.png';
import images_71b7dffa_3ada_4f70_acba_132ba3ec23f3_png from '/images/71b7dffa-3ada-4f70-acba-132ba3ec23f3.png';
import images_c00f8879_3308_48f2_801e_edd79fd3d688_png from '/images/c00f8879-3308-48f2-801e-edd79fd3d688.png';
import images_c90b1dea_37ff_4c67_8d61_94c8363b9e6f_png from '/images/c90b1dea-37ff-4c67-8d61-94c8363b9e6f.png';
import images_807e706a_ae3c_4c73_9f85_68cd9a7d362f_png from '/images/807e706a-ae3c-4c73-9f85-68cd9a7d362f.png';
import images_e5b15350_22b9_44e1_a184_4e297b23ea3c_png from '/images/e5b15350-22b9-44e1-a184-4e297b23ea3c.png';
import images_6486d54f_02d2_484c_bb94_e45615d4c97e_png from '/images/6486d54f-02d2-484c-bb94-e45615d4c97e.png';
import images_9b424934_069a_4f7b_a8b7_8194123b3e60_png from '/images/9b424934-069a-4f7b-a8b7-8194123b3e60.png';
import images_108029e2_1dab_41e9_a4e8_6aaa76ac37fc_png from '/images/108029e2-1dab-41e9-a4e8-6aaa76ac37fc.png';

export const Img = ({ id }) => {
    switch (String(id)) {    case "0":
        return (
            <img data-v-067a1f02={""} src={images_bf9eb653_12ed_49d0_a9bf_d43c842a96b8_png} alt={"afkclient.pro"} className={"phantom-logo-img"}></img>
        );
    case "1":
        return (
            <img data-v-856b3794={""} src={images_fe8e3c0d_e529_4c5e_b9c3_a92adc133a79_png} alt={"Xyrk_"}></img>
        );
    case "2":
        return (
            <img data-v-b9cd00f9={""} src={images_1a05e6eb_c9de_4129_807e_2262432111ae_png} alt={"donutsmp.net"} className={"server-folder-icon"} width={"24"} height={"24"} loading={"lazy"} decoding={"async"} referrerPolicy={"no-referrer"}></img>
        );
    case "3":
        return (
            <img loading={"lazy"} src={images_d79e0a04_e5d8_49eb_9614_411ca50030da_png} alt={"Xyrk_"} className={"acct-avatar acct-avatar-compact"}></img>
        );
    case "4":
        return (
            <img data-v-856b3794={""} src={images_6192e999_9f0e_459e_80b5_6b476cbb72df_png} alt={""} className={"sidebar-action-btn__icon"} width={"18"} height={"18"} draggable={"false"}></img>
        );
    case "5":
        return (
            <img data-v-067a1f02={""} src={images_13c2546d_e697_413f_ad63_860e661618d2_png} alt={"avatar"} className={"sidebar-user-avatar"}></img>
        );
    case "6":
        return (
            <img src={images_bca4259c_0950_41e4_a074_8bd4276ca414_png} alt={"head"} className={"phantom-main-card-head"}></img>
        );
    case "7":
        return (
            <img data-v-b9cd00f9={""} src={images_1a05e6eb_c9de_4129_807e_2262432111ae_png} alt={"donutsmp.net"} className={"server-folder-icon"} width={"18"} height={"18"} loading={"lazy"} decoding={"async"} referrerPolicy={"no-referrer"}></img>
        );
    case "8":
        return (
            <img src={images_1b5db53b_9d14_4942_bdb3_7cf37fc50a62_png} alt={""} className={"standing-block-icon"}></img>
        );
    case "9":
        return (
            <img src={images_8ec50035_95ab_4d96_b827_865d8a7796e2_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "10":
        return (
            <img src={images_127eeb09_91a4_4722_ad75_972be3c66a6c_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "11":
        return (
            <img src={images_cdc556f6_ae99_4845_9318_46859855573f_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "12":
        return (
            <img src={images_e878a062_2c56_4998_b34d_d27b4583b925_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "13":
        return (
            <img src={images_f585ebd7_1435_4a87_81ae_d032bfaf7a2b_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "14":
        return (
            <img src={images_320163a3_831f_49ec_8fec_a8284f5fe45c_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "15":
        return (
            <img src={images_9cdd3b8e_3d28_4a90_8e80_8e0f157e93bc_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "16":
        return (
            <img src={images_78e92f89_357e_4447_9e1b_3b84e8af1e72_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "17":
        return (
            <img src={images_fd2369a7_885a_4196_9096_afd72ba1169b_png} alt={""} className={"inv-icon"} draggable={"false"}></img>
        );
    case "18":
        return (
            <img src={images_00a7abaf_3ab8_4b9e_b0ff_2b74adacde68_png} alt={"DE"} style={{width:"16px", height:"12px", borderRadius:"1px", objectFit:"cover", flexShrink:"0"}}></img>
        );
    case "19":
        return (
            <img src={images_c5e494b7_d762_457d_8ddb_19e6bc03f1dc_png} alt={""} style={{width:"18px", height:"13px", borderRadius:"1px", objectFit:"cover", flexShrink:"0"}}></img>
        );
    case "20":
        return (
            <img data-v-830291ff={""} src={images_c25e8561_16b9_49dc_848d_436b0998680d_png} alt={"DonutSMP Auto Sell"} className={"automation-image automation-image--logo"}></img>
        );
    case "21":
        return (
            <img data-v-830291ff={""} src={images_c25e8561_16b9_49dc_848d_436b0998680d_png} alt={"Sell Axe"} className={"automation-image automation-image--logo"}></img>
        );
    case "22":
        return (
            <img data-v-830291ff={""} src={images_c25e8561_16b9_49dc_848d_436b0998680d_png} alt={"DonutSMP Spawner Sell"} className={"automation-image automation-image--logo"}></img>
        );
    case "23":
        return (
            <img data-v-830291ff={""} src={images_c25e8561_16b9_49dc_848d_436b0998680d_png} alt={"DonutSMP Spawner Drop"} className={"automation-image automation-image--logo"}></img>
        );
    case "24":
        return (
            <img data-v-830291ff={""} src={images_c25e8561_16b9_49dc_848d_436b0998680d_png} alt={"DonutSMP Staff Check"} className={"automation-image automation-image--logo"}></img>
        );
    case "25":
        return (
            <img data-v-cef28e8e={""} src={images_524ab270_eef3_44bf_806b_f51b9679fe71_png} className={"banner-head"}></img>
        );
    case "26":
        return (
            <img className={"tablist-head"} src={images_d35dd6bb_0f52_449c_bab0_41bbd277ee9f_png} alt={""} loading={"lazy"}></img>
        );
    case "27":
        return (
            <img className={"tablist-head"} src={images_a43eb0f2_02c1_44a5_a7b2_84c042b8d23d_png} alt={""} loading={"lazy"}></img>
        );
    case "28":
        return (
            <img className={"tablist-head"} src={images_f3735e4b_36b0_432d_a7a4_d6ab1db8bc4e_png} alt={""} loading={"lazy"}></img>
        );
    case "29":
        return (
            <img className={"tablist-head"} src={images_aa426193_33b1_4da0_a529_7ae974bc7c97_png} alt={""} loading={"lazy"}></img>
        );
    case "30":
        return (
            <img className={"tablist-head"} src={images_a125a7ee_62f0_4ea5_ae6d_7e727ca76536_png} alt={""} loading={"lazy"}></img>
        );
    case "31":
        return (
            <img className={"tablist-head"} src={images_7e063a3e_c5cb_43c9_a351_2ee37c3de074_png} alt={""} loading={"lazy"}></img>
        );
    case "32":
        return (
            <img className={"tablist-head"} src={images_80af296b_caae_4514_951a_adc1b5c50e60_png} alt={""} loading={"lazy"}></img>
        );
    case "33":
        return (
            <img className={"tablist-head"} src={images_14fa56e7_540b_4918_9bb1_bb0edef994dc_png} alt={""} loading={"lazy"}></img>
        );
    case "34":
        return (
            <img className={"tablist-head"} src={images_30196112_b231_43e0_add4_e29022919254_png} alt={""} loading={"lazy"}></img>
        );
    case "35":
        return (
            <img className={"tablist-head"} src={images_7201608b_1be3_4a8e_8c3b_7f02ca487ae5_png} alt={""} loading={"lazy"}></img>
        );
    case "36":
        return (
            <img className={"tablist-head"} src={images_0967950f_69cc_4151_b042_fdd15616a661_png} alt={""} loading={"lazy"}></img>
        );
    case "37":
        return (
            <img className={"tablist-head"} src={images_9d786483_eb12_4eac_ae74_c1f9269b527b_png} alt={""} loading={"lazy"}></img>
        );
    case "38":
        return (
            <img className={"tablist-head"} src={images_d9a0dac4_c4f9_44f7_915d_ed243246780d_png} alt={""} loading={"lazy"}></img>
        );
    case "39":
        return (
            <img className={"tablist-head"} src={images_99c855b0_be88_4988_8e55_db117e81e883_png} alt={""} loading={"lazy"}></img>
        );
    case "40":
        return (
            <img className={"tablist-head"} src={images_08b5418c_2226_4722_aa3b_8635e2c37d55_png} alt={""} loading={"lazy"}></img>
        );
    case "41":
        return (
            <img className={"tablist-head"} src={images_41f1b41b_a70c_421b_8d15_6e3d46ff2930_png} alt={""} loading={"lazy"}></img>
        );
    case "42":
        return (
            <img className={"tablist-head"} src={images_0c40fbd8_3f63_4b14_8b9b_8a595343c5e9_png} alt={""} loading={"lazy"}></img>
        );
    case "43":
        return (
            <img className={"tablist-head"} src={images_d8ffcf46_20c3_4058_bf36_59daa7d2cddc_png} alt={""} loading={"lazy"}></img>
        );
    case "44":
        return (
            <img className={"tablist-head"} src={images_36af1754_b524_4a86_a87d_cb3913c5a043_png} alt={""} loading={"lazy"}></img>
        );
    case "45":
        return (
            <img className={"tablist-head"} src={images_2ca2a9c8_25fb_4103_b74a_5bdbb613cd9b_png} alt={""} loading={"lazy"}></img>
        );
    case "46":
        return (
            <img className={"tablist-head"} src={images_ae429d66_7359_4b6c_a569_40f0a595ed65_png} alt={""} loading={"lazy"}></img>
        );
    case "47":
        return (
            <img className={"tablist-head"} src={images_97c832bc_2c70_4c7c_816a_c3f3e05baf8f_png} alt={""} loading={"lazy"}></img>
        );
    case "48":
        return (
            <img className={"tablist-head"} src={images_687d95e9_d800_46df_88ba_1cd7f0ba3c3e_png} alt={""} loading={"lazy"}></img>
        );
    case "49":
        return (
            <img className={"tablist-head"} src={images_0babcbbd_c9c1_47fe_ab33_ebd0f2a6c1be_png} alt={""} loading={"lazy"}></img>
        );
    case "50":
        return (
            <img className={"tablist-head"} src={images_52c4e45e_12d0_43b2_94a2_d640e5ae1d05_png} alt={""} loading={"lazy"}></img>
        );
    case "51":
        return (
            <img className={"tablist-head"} src={images_d3610e17_88f8_4dea_be55_148000670ca5_png} alt={""} loading={"lazy"}></img>
        );
    case "52":
        return (
            <img className={"tablist-head"} src={images_7d98811e_b790_4cdf_8505_161ef7f3f342_png} alt={""} loading={"lazy"}></img>
        );
    case "53":
        return (
            <img className={"tablist-head"} src={images_0d153ae1_9564_45c5_a525_d67f10f44e09_png} alt={""} loading={"lazy"}></img>
        );
    case "54":
        return (
            <img className={"tablist-head"} src={images_f94b179e_e33e_4d69_9d2d_17165171e10a_png} alt={""} loading={"lazy"}></img>
        );
    case "55":
        return (
            <img className={"tablist-head"} src={images_971c6b78_6252_4947_8858_fae629afcbc0_png} alt={""} loading={"lazy"}></img>
        );
    case "56":
        return (
            <img className={"tablist-head"} src={images_e517b4a4_991b_4e78_8f75_5ac671a9a50b_png} alt={""} loading={"lazy"}></img>
        );
    case "57":
        return (
            <img className={"tablist-head"} src={images_8c04e6fc_bb71_4ab1_b31e_ff43275369bd_png} alt={""} loading={"lazy"}></img>
        );
    case "58":
        return (
            <img className={"tablist-head"} src={images_c8c8c366_d409_4b82_adaf_1dd0a70d590b_png} alt={""} loading={"lazy"}></img>
        );
    case "59":
        return (
            <img className={"tablist-head"} src={images_eb7870c8_a830_40e6_a48c_24b59eecb41a_png} alt={""} loading={"lazy"}></img>
        );
    case "60":
        return (
            <img className={"tablist-head"} src={images_0b1496a7_b543_4e79_9c5d_02cf41c1570a_png} alt={""} loading={"lazy"}></img>
        );
    case "61":
        return (
            <img className={"tablist-head"} src={images_a1654211_6bc3_4b1f_bb35_7930af1e3ef3_png} alt={""} loading={"lazy"}></img>
        );
    case "62":
        return (
            <img className={"tablist-head"} src={images_d23e97ed_beb2_4636_8ba1_52f9be798d20_png} alt={""} loading={"lazy"}></img>
        );
    case "63":
        return (
            <img className={"tablist-head"} src={images_3120ddb2_c159_4074_9ca2_48e7931a15e9_png} alt={""} loading={"lazy"}></img>
        );
    case "64":
        return (
            <img className={"tablist-head"} src={images_dbc6212c_22c5_4466_841d_98a5b4c0aa6c_png} alt={""} loading={"lazy"}></img>
        );
    case "65":
        return (
            <img className={"tablist-head"} src={images_b2bf1351_4ed7_42c5_b215_9f12e2b58495_png} alt={""} loading={"lazy"}></img>
        );
    case "66":
        return (
            <img className={"tablist-head"} src={images_4d2f3bb2_6e1b_46d0_9694_5e48ef35fa41_png} alt={""} loading={"lazy"}></img>
        );
    case "67":
        return (
            <img className={"tablist-head"} src={images_bd2d7ccd_a260_41c1_9ae9_6167b45efbd7_png} alt={""} loading={"lazy"}></img>
        );
    case "68":
        return (
            <img className={"tablist-head"} src={images_fc56615c_f946_48d1_ae40_472b7d6babb4_png} alt={""} loading={"lazy"}></img>
        );
    case "69":
        return (
            <img className={"tablist-head"} src={images_4cb0638e_6476_41d6_8cce_be2cdc4ea343_png} alt={""} loading={"lazy"}></img>
        );
    case "70":
        return (
            <img className={"tablist-head"} src={images_955a9be3_8b9a_4101_9476_5cc7d4d8ee12_png} alt={""} loading={"lazy"}></img>
        );
    case "71":
        return (
            <img className={"tablist-head"} src={images_ceef1efe_f98c_477b_9158_368c7c3013d0_png} alt={""} loading={"lazy"}></img>
        );
    case "72":
        return (
            <img className={"tablist-head"} src={images_6c47a46d_4747_44cc_90a8_060eb2ea14de_png} alt={""} loading={"lazy"}></img>
        );
    case "73":
        return (
            <img className={"tablist-head"} src={images_07350e0e_d1a3_4656_a536_010c21563aab_png} alt={""} loading={"lazy"}></img>
        );
    case "74":
        return (
            <img className={"tablist-head"} src={images_e0c4f8ec_d2b5_4e46_ab8c_f753f13e3959_png} alt={""} loading={"lazy"}></img>
        );
    case "75":
        return (
            <img className={"tablist-head"} src={images_a21ab74a_deb3_4e82_9c36_9e980225a733_png} alt={""} loading={"lazy"}></img>
        );
    case "76":
        return (
            <img className={"tablist-head"} src={images_19fd27d6_f87c_49cb_b46a_0b3e643cb443_png} alt={""} loading={"lazy"}></img>
        );
    case "77":
        return (
            <img className={"tablist-head"} src={images_2e7a95e2_7040_4d59_ac89_53854abd4f3d_png} alt={""} loading={"lazy"}></img>
        );
    case "78":
        return (
            <img className={"tablist-head"} src={images_19776d76_8bd4_45d7_8050_e893433b99c8_png} alt={""} loading={"lazy"}></img>
        );
    case "79":
        return (
            <img className={"tablist-head"} src={images_11b6fdab_4703_4e43_b3d2_43ee92bee77b_png} alt={""} loading={"lazy"}></img>
        );
    case "80":
        return (
            <img className={"tablist-head"} src={images_7fd7824d_ec33_4643_9cb9_2c2cafa4655f_png} alt={""} loading={"lazy"}></img>
        );
    case "81":
        return (
            <img className={"tablist-head"} src={images_e00e1390_1622_46a4_b447_11899f610aa4_png} alt={""} loading={"lazy"}></img>
        );
    case "82":
        return (
            <img className={"tablist-head"} src={images_b14182c5_08e6_4957_9f56_65d300ae9ddb_png} alt={""} loading={"lazy"}></img>
        );
    case "83":
        return (
            <img className={"tablist-head"} src={images_e9e8be55_c493_431e_982b_9f0f84f38026_png} alt={""} loading={"lazy"}></img>
        );
    case "84":
        return (
            <img className={"tablist-head"} src={images_2dde6b53_68e4_44a4_9e22_95c9ae19ccef_png} alt={""} loading={"lazy"}></img>
        );
    case "85":
        return (
            <img className={"tablist-head"} src={images_791e676d_3e9a_42c0_927c_5f0fc2eee557_png} alt={""} loading={"lazy"}></img>
        );
    case "86":
        return (
            <img className={"tablist-head"} src={images_33dde5cd_e5f7_4ab1_99fd_5553a2b37659_png} alt={""} loading={"lazy"}></img>
        );
    case "87":
        return (
            <img className={"tablist-head"} src={images_5054fd27_39a6_4c81_a63b_e9f9c415b01b_png} alt={""} loading={"lazy"}></img>
        );
    case "88":
        return (
            <img className={"tablist-head"} src={images_618114c0_e15c_4588_a8ba_18b446c3b134_png} alt={""} loading={"lazy"}></img>
        );
    case "89":
        return (
            <img className={"tablist-head"} src={images_75b959f9_edd8_4479_88bb_cb5fd919aa99_png} alt={""} loading={"lazy"}></img>
        );
    case "90":
        return (
            <img className={"tablist-head"} src={images_54edcac6_3a96_4c01_a186_2c7b6c92a054_png} alt={""} loading={"lazy"}></img>
        );
    case "91":
        return (
            <img className={"tablist-head"} src={images_f281cd5a_5303_4daa_a7db_315283fb295d_png} alt={""} loading={"lazy"}></img>
        );
    case "92":
        return (
            <img className={"tablist-head"} src={images_c512b347_782a_4454_bc38_535c9fa3734a_png} alt={""} loading={"lazy"}></img>
        );
    case "93":
        return (
            <img className={"tablist-head"} src={images_5a2f2617_37ee_4685_841d_47c6432e0c0e_png} alt={""} loading={"lazy"}></img>
        );
    case "94":
        return (
            <img className={"tablist-head"} src={images_70d7b867_fee5_4601_ab37_edd491d0a443_png} alt={""} loading={"lazy"}></img>
        );
    case "95":
        return (
            <img className={"tablist-head"} src={images_a94f3cb4_8b8c_4c0b_91cc_3942b3daf6eb_png} alt={""} loading={"lazy"}></img>
        );
    case "96":
        return (
            <img className={"tablist-head"} src={images_43e2f30d_4023_46b0_ac08_344b099d2916_png} alt={""} loading={"lazy"}></img>
        );
    case "97":
        return (
            <img className={"tablist-head"} src={images_94d2f23b_d3df_4bce_a859_25d04e3cc3df_png} alt={""} loading={"lazy"}></img>
        );
    case "98":
        return (
            <img className={"tablist-head"} src={images_b4c0d1d5_5865_4c1d_886c_37ab2c8f3e6f_png} alt={""} loading={"lazy"}></img>
        );
    case "99":
        return (
            <img className={"tablist-head"} src={images_8440f11a_5588_4d6a_a405_e3cfd5e54c5b_png} alt={""} loading={"lazy"}></img>
        );
    case "100":
        return (
            <img className={"tablist-head"} src={images_aac600aa_d6fa_4917_b8ab_01ad743740af_png} alt={""} loading={"lazy"}></img>
        );
    case "101":
        return (
            <img className={"tablist-head"} src={images_9f42e8ac_3e91_4ad1_955b_2f895bbef58d_png} alt={""} loading={"lazy"}></img>
        );
    case "102":
        return (
            <img className={"tablist-head"} src={images_ec110371_9fec_43ce_b0a7_e869d2ff19c5_png} alt={""} loading={"lazy"}></img>
        );
    case "103":
        return (
            <img className={"tablist-head"} src={images_493d8a96_48b5_4d14_a6e0_606c7da9bbb9_png} alt={""} loading={"lazy"}></img>
        );
    case "104":
        return (
            <img className={"tablist-head"} src={images_00068ff9_f13e_4cbd_a6f1_f3ac2c02eec4_png} alt={""} loading={"lazy"}></img>
        );
    case "105":
        return (
            <img className={"tablist-head"} src={images_b5771954_d26c_4e9d_9ff8_a88b693acbc3_png} alt={""} loading={"lazy"}></img>
        );
    case "106":
        return (
            <img className={"tablist-head"} src={images_71b7dffa_3ada_4f70_acba_132ba3ec23f3_png} alt={""} loading={"lazy"}></img>
        );
    case "107":
        return (
            <img className={"tablist-head"} src={images_c00f8879_3308_48f2_801e_edd79fd3d688_png} alt={""} loading={"lazy"}></img>
        );
    case "108":
        return (
            <img className={"tablist-head"} src={images_c90b1dea_37ff_4c67_8d61_94c8363b9e6f_png} alt={""} loading={"lazy"}></img>
        );
    case "109":
        return (
            <img className={"tablist-head"} src={images_807e706a_ae3c_4c73_9f85_68cd9a7d362f_png} alt={""} loading={"lazy"}></img>
        );
    case "110":
        return (
            <img className={"tablist-head"} src={images_e5b15350_22b9_44e1_a184_4e297b23ea3c_png} alt={""} loading={"lazy"}></img>
        );
    case "111":
        return (
            <img data-v-eee196c5={""} src={images_6192e999_9f0e_459e_80b5_6b476cbb72df_png} alt={""} className={"aam-tab-icon"} width={"22"} height={"22"} draggable={"false"}></img>
        );
    case "112":
        return (
            <img data-v-eee196c5={""} src={images_6486d54f_02d2_484c_bb94_e45615d4c97e_png} alt={""} className={"aam-tab-icon aam-tab-icon--pixelated"} width={"22"} height={"22"} draggable={"false"}></img>
        );
    case "113":
        return (
            <img data-v-eee196c5={""} src={images_9b424934_069a_4f7b_a8b7_8194123b3e60_png} alt={""} className={"aam-tab-icon aam-tab-icon--pixelated"} width={"22"} height={"22"} draggable={"false"}></img>
        );
    case "114":
        return (
            <img data-v-eee196c5={""} src={images_6192e999_9f0e_459e_80b5_6b476cbb72df_png} alt={""} className={"aam-pane-icon"} width={"48"} height={"48"}></img>
        );
    case "115":
        return (
            <img data-v-f0ece469={""} src={images_108029e2_1dab_41e9_a4e8_6aaa76ac37fc_png} alt={"Microsoft"} className={"msa-icon"}></img>
        );
    default:
        return null;
    }
};

export default Img
