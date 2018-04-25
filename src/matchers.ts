// tslint:disable-next-line
/// <reference path="./matchers-declaration.ts"/>

import CustomMatcherFactories = jasmine.CustomMatcherFactories;

export const SkyVisualMatchers: CustomMatcherFactories = {
  toMatchBaseline: (
    util: jasmine.MatchersUtil,
    customEqualityTesters: jasmine.CustomEqualityTester[]
  ) => {
    return {
      compare(actual: any): jasmine.CustomMatcherResult {
        return {
          message: actual.message,
          pass: actual.isSimilar
        };
      }
    };
  }
};