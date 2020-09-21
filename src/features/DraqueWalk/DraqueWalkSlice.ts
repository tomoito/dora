import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import Draque from "../Draque.json";
import Draque_one from "../Draque one.json";
import Draque_default from "../Draque defalt.json";

export type Dora = typeof Draque;
export type Dora_one = typeof Draque_one;

type DoraFilter = {
  val: string;
  skill: string[];
};

type Doralist = {
  cnt: number;
  Dora: Dora;
  disDora: Dora;
};

type kokoro = {
  name: string;
  val: number;
};

type skillSumList = {
  selectKokoro: kokoro[];
};

const base_info = [
  "HP",
  "MP",
  "ちから",
  "みのまもり",
  "かしこさ",
  "すばやさ",
  "回復魔力",
  "魔法魔力",
];

const initialState = {
  cnt: 0,
  // togle: Array(0),
  togle: ["青"],
  serachVal: "",
  serachSkill: Array(0),
  Dora: Draque,
  disDora: Draque,
  selectedKokoro: Array([]),
  selectedKokoro_kai: Array([]),
  selectedKokoro_detail: Draque_default,
  statud_sum: Array(0),
};

const DoraSlice = createSlice({
  name: "dora",
  initialState,
  reducers: {
    filterType: (state, action: PayloadAction<string[]>) => {
      state.togle = action.payload;
    },
    searchVal: (state, action: PayloadAction<string>) => {
      // state.serachVal = action.payload;
      state.serachVal = action.payload;
    },
    searchSkill: (state, action: PayloadAction<string[]>) => {
      state.serachSkill = action.payload;
    },
    skillSelectedSum: (state, action: PayloadAction<any[]>) => {
      const x = action.payload;
      state.selectedKokoro = x;
    },

    skillSelectedSum_kai: (state, action: PayloadAction<any[]>) => {
      const x = action.payload;
      state.selectedKokoro = x;
    },
    skillSelectedSum_detail: (state, action: PayloadAction<any[]>) => {
      const lst = action.payload;
      const x = lst[0];
      const target = lst[1];
      // alert(target);
      const Kokoro = state.Dora.find((i) => i.id == x);
      const y: any = state.selectedKokoro_detail;

      // alert("beafore");
      // y.map((i: any) => alert(i.id));
      y.splice(target - 1, 1, Kokoro);
      // alert("after");
      // y.map((i: any) => alert(i.id));

      state.selectedKokoro_detail = y;
      //---------->>base

      const base_sum = base_info.map((st) => {
        const aaa = state.selectedKokoro_detail.map((i: any) => {
          // console.log(i.base[base_info[5]]);

          if (i.type == "青") {
            return i.base[st] * 100;
          } else {
            return i.base[st];
          }
          // alert(i.base[st]);
          // alert(i.type);

          // return i.base[st];
        });
        return aaa;
      });

      const statusList = [];
      const reducer_base = (sum: any, currentValue: any) => sum + currentValue;
      const base_calc = base_sum.map((i) => i.reduce(reducer_base));

      for (var i in base_info) {
        statusList.push([base_info[i], base_calc[i]]);
      }

      console.log(statusList);
      state.statud_sum = statusList;
      //----------------------------------->>
      const array1 = state.selectedKokoro_detail.map((i: any) => {
        return i.skillDetail;
      });

      const skillList: string[] = [];
      const skill_va: any = [];
      const array2: string[] = array1.map((i: any) => {
        const test = i.map((b: any) => {
          skillList.push(b.name);
          skill_va.push([b.name, b.value]);
          return b.name;
        });
        return test;
      });

      const array3: any[] = [...new Set(skillList)];
      const xx = array3.map((i) => {
        const yy = skill_va.filter((yy: any) => yy[0] == i);
        return yy;
      });

      const x1 = array3.map((i) => {
        const x2 = skill_va
          .filter((yy: any) => yy[0] == i)
          .map((n: any) => n[1]);
        return x2;
      });

      const reducer = (sum: any, currentValue: any) => sum + currentValue;
      const sumCalc = x1.map((i) => i.reduce(reducer));

      const selectAll = [];

      for (var i in array3) {
        selectAll.push([array3[i], sumCalc[i]]);
      }
      const temp: any = selectAll;
      state.selectedKokoro = temp;

      //----------------------------------->>
    },

    doraSearch: (state, action: PayloadAction<string>) => {
      let include_Dora = state.Dora.filter((doraque) => {
        return doraque.name.japanese.includes(state.serachVal);
      });

      include_Dora = include_Dora.filter((doraque) => {
        const matched = state.togle.map((ft) => {
          return doraque.type.includes(ft);
        });

        const xxxx = matched.some((i) => i == true);
        return xxxx;
      });

      if (state.serachSkill.length > 0) {
        include_Dora = include_Dora.filter((doraque) => {
          const matched = state.serachSkill.map((ft) => {
            return doraque.skillList2.includes(ft);
          });

          if (matched.length === 1) {
            // alert(matched.includes(true));
            return matched.includes(true);
          }
          return !matched.includes(false);
        });
      }

      state.disDora = include_Dora;
    },
  },
});

export const DoraList = (state: RootState) => state.Doraque.Dora;
export const distDora = (state: RootState) => state.Doraque.disDora;
export const DoraFil = (state: RootState) => state.Doraque.togle;
export const DoraSearchVal = (state: RootState) => state.Doraque.serachVal;
export const DoraSearchSkill = (state: RootState) => state.Doraque.serachSkill;
export const skillSum = (state: RootState) => state.Doraque.selectedKokoro;
export const skillSum_kai = (state: RootState) =>
  state.Doraque.selectedKokoro_kai;

export const skillSum_Detail = (state: RootState) =>
  state.Doraque.selectedKokoro_detail;

export const statusSum = (state: RootState) => state.Doraque.statud_sum;

export const {
  doraSearch,
  filterType,
  searchVal,
  searchSkill,
  skillSelectedSum,
  skillSelectedSum_kai,
  skillSelectedSum_detail,
} = DoraSlice.actions;
export default DoraSlice.reducer;
