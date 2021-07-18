import { getRepository } from 'typeorm';
import { Category } from '../../../products/category/Category.entity';

describe('Test 2', () => {
  it('test 1', async () => {
    const category = new Category({
      name: 'tessst'
    });

    const savedCategory = await getRepository(Category).save(category);

    expect(savedCategory).toBeInstanceOf(Category);
  });

  it('test 2', async () => {
    const category = new Category({
      name: 'tessst'
    });

    const savedCategory = await getRepository(Category).save(category);

    expect(savedCategory).toBeInstanceOf(Category);
  });

  it('test 3', async () => {
    const category = new Category({
      name: 'tessst'
    });

    const savedCategory = await getRepository(Category).save(category);

    expect(savedCategory).toBeInstanceOf(Category);
  });

  it('test 4', async () => {
    const category = new Category({
      name: 'tessst'
    });

    const savedCategory = await getRepository(Category).save(category);

    expect(savedCategory).toBeInstanceOf(Category);
  });

  it('test 5', async () => {
    const category = new Category({
      name: 'tessst'
    });

    const savedCategory = await getRepository(Category).save(category);

    expect(savedCategory).toBeInstanceOf(Category);
  });
});
