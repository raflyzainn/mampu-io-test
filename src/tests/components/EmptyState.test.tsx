import { render, screen } from '@testing-library/react';
import { EmptyState } from '@/components/EmptyState';

describe('EmptyState Component', () => {
  it('should render title', () => {
    render(<EmptyState title="No data" />);
    expect(screen.getByText('No data')).toBeInTheDocument();
  });

  it('should render title and description', () => {
    render(
      <EmptyState
        title="No results"
        description="Try adjusting your filters"
      />
    );
    expect(screen.getByText('No results')).toBeInTheDocument();
    expect(screen.getByText('Try adjusting your filters')).toBeInTheDocument();
  });

  it('should not render description if not provided', () => {
    const { container } = render(<EmptyState title="Empty" />);
    const description = container.querySelector('p');
    expect(description).not.toBeInTheDocument();
  });
});
