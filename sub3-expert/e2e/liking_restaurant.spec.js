/* eslint-disable no-undef */
const assert = require('assert');

Feature('liking restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorite');
});

Scenario('showing empty favorite page', ({ I }) => {
  I.see('Belum terdapat restaurant favorite', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum terdapat restaurant favorite', '.resto-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto-title a');
  I.seeElement('.resto-title a');
  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  I.seeElement('.resto-item');
  const likedRestaurant = await I.grabTextFrom('.resto-title');

  assert.strictEqual(firstRestoTitle, likedRestaurant);
});

Scenario('canceling liked restaurant', async ({ I }) => {
  I.see('Belum terdapat restaurant favorite', '.resto-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto-title a');
  I.seeElement('.resto-title a');
  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  I.seeElement('.resto-item');
  const likedRestaurant = await I.grabTextFrom('.resto-title');

  assert.strictEqual(firstRestoTitle, likedRestaurant);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/Favorite');
  I.see('Belum terdapat restaurant favorite', '.resto-item__not__found');
});
